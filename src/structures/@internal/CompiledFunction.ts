import {
    PermissionFlagsBits,
    TextChannel,
    parseEmoji,
    ForumChannel,
    AttachmentBuilder,
    PermissionsString,
    StageChannel,
    StageInstance,
} from "discord.js"
import { existsSync } from "fs"
import { inspect } from "util"
import { TimeParser } from "../../constants"
import { ICompiledFunctionConditionField, ICompiledFunctionField, ICompiledFunction } from "../../core"
import parseJSON from "../../functions/parseJSON"
import { FunctionManager } from "../../managers"
import { ErrorType, GetErrorArgs, ForgeError } from "../forge/ForgeError"
import { Context } from "./Context"
import { IArg, UnwrapArgs, NativeFunction, ArgType, OverwritePermission } from "./NativeFunction"
import { Return, ReturnType, ReturnValue } from "./Return"
import { resolveColor } from "../../functions/hex"
import noop from "../../functions/noop"

export interface IExtendedCompiledFunctionConditionField extends Omit<ICompiledFunctionConditionField, "rhs" | "lhs"> {
    lhs: IExtendedCompiledFunctionField
    rhs?: IExtendedCompiledFunctionField
}

export interface IExtendedCompiledFunctionField extends Omit<ICompiledFunctionField, "functions"> {
    functions: CompiledFunction[]
    resolveArg?: (ctx: Context, arg: IArg, value: string, ref: Array<unknown>) => unknown | Promise<unknown>
}

export interface IExtendedCompiledFunction extends Omit<ICompiledFunction, "fields"> {
    fields: (IExtendedCompiledFunctionField | IExtendedCompiledFunctionConditionField)[] | null
}

export interface IMultipleArgResolve<T extends [...IArg[]], X extends [...number[]]> {
    args: {
        [P in keyof X]: UnwrapArgs<T>[X[P]]
    }
    return: Return
}

export class CompiledFunction<T extends [...IArg[]] = IArg[], Unwrap extends boolean = boolean> {
    public static readonly OverwriteSymbolMapping = {
        "/": null,
        "+": true,
        "-": false,
    }

    public static readonly IdRegex = /^(\d{16,23})$/
    public static readonly URLRegex = /^http?s:\/\//
    public static readonly CDNIdRegex = /https?:\/\/cdn.discordapp.com\/(emojis|stickers)\/(\d+)/

    public readonly data: IExtendedCompiledFunction
    public readonly fn: NativeFunction<T, Unwrap>

    public constructor(raw: ICompiledFunction) {
        this.fn = FunctionManager.get(raw.name) as NativeFunction<T, Unwrap>
        this.data = {
            ...raw,
            fields:
                raw.fields?.map((x) =>
                    !("op" in x)
                        ? {
                            ...x,
                            functions: x.functions.map((x) => new CompiledFunction(x)),
                        }
                        : {
                            ...x,
                            lhs: {
                                ...x.lhs,
                                functions: x.lhs.functions.map((x) => new CompiledFunction(x)),
                            },
                            rhs: x.rhs
                                ? {
                                    ...x.rhs,
                                    functions: x.rhs.functions.map((x) => new CompiledFunction(x)),
                                }
                                : undefined,
                        }
                ) ?? null,
        }
    }

    public displayField(i: number) {
        const field = this.data.fields![i]
        if (!field) return null
        if ("op" in field) {
            if (field.rhs) {
                return `${field.lhs.resolve(field.lhs.functions.map((x) => x.display))}${field.op}${field.rhs.resolve(
                    field.rhs.functions.map((x) => x.display)
                )}`
            } else return field.lhs.resolve(field.lhs.functions.map((x) => x.display))
        }
        return field.resolve(field.functions.map((x) => x.display))
    }

    public get display(): string {
        if (this.data.fields === null) return this.data.name
        else {
            const args = new Array<string>()

            for (let i = 0, len = this.data.fields.length; i < len; i++) {
                const field = this.displayField(i)
                if (field) args.push(field)
            }

            return `${this.data.name}[${args.join(";")}]`
        }
    }

    /**
     * Resolves fields of a function.
     * @param ctx
     * @returns
     */
    private async resolveArgs(ctx: Context): Promise<Return> {
        const args = new Array(this.fn.data.args?.length ?? 0) as UnwrapArgs<T>

        if (!this.fn.data.args?.length || (this.fn.data.brackets === false && !this.hasFields))
            return this.unsafeSuccess(args)

        for (let i = 0, len = this.fn.data.args.length; i < len; i++) {
            const rt = await this.resolveUnhandledArg(ctx, i, args)
            if (!this.isValidReturnType(rt)) return rt
            args[i] = rt.value as UnwrapArgs<T>[number]
        }

        return this.unsafeSuccess(args)
    }

    private async resolveMultipleArgs<X extends [...number[]]>(
        ctx: Context,
        ...indexes: [...X]
    ): Promise<IMultipleArgResolve<T, X>> {
        const args = new Array(indexes.length) as IMultipleArgResolve<T, X>["args"]

        for (let i = 0, len = indexes.length; i < len; i++) {
            const index = indexes[i]
            const arg = await this.resolveUnhandledArg(ctx, index, args)
            if (!this.isValidReturnType(arg))
                return {
                    args,
                    return: arg,
                }
            args[i] = arg.value as IMultipleArgResolve<T, X>["args"][number]
        }

        return {
            args,
            return: this.unsafeSuccess(),
        }
    }

    /**
     * Does not account for condition fields.
     * @param ctx
     * @param index
     * @returns
     */
    private async resolveUnhandledArg(ctx: Context, i: number, ref: any[] = []): Promise<Return> {
        const arg = this.fn.data.args![i]

        if (!arg.rest) {
            // Assertion because condition fields should never be executed with unwraps.
            const field = this.data.fields?.[i] as IExtendedCompiledFunctionField
            const resolved = await this.resolveCode(ctx, field)
            if (!this.isValidReturnType(resolved)) return resolved

            const val = await this.resolveArg(ctx, arg, field, resolved.value, ref as UnwrapArgs<T>)
            if (!this.isValidReturnType(val)) return val
            return this.unsafeSuccess(val.value)
        } else {
            const fields = this.data.fields?.slice(i)
            const values = new Array()

            if (!fields?.length) {
                if (arg.required) return this.error(ErrorType.MissingArg, this.data.name, arg.name)
                return this.unsafeSuccess(values)
            }

            for (let x = 0, len = fields.length; x < len; x++) {
                // Assertion because condition fields should never be executed with unwraps.
                const field = fields[x] as IExtendedCompiledFunctionField
                const resolved = await this.resolveCode(ctx, field)
                if (!this.isValidReturnType(resolved)) return resolved

                const val = await this.resolveArg(ctx, arg, field, resolved.value, ref as UnwrapArgs<T>)
                if (!this.isValidReturnType(val)) return val

                values[x] = val.value as UnwrapArgs<T>[number]
            }

            return this.unsafeSuccess(values)
        }
    }

    private async resolveCondition(ctx: Context, field: IExtendedCompiledFunctionConditionField) {
        const lhs = await this.resolveCode(ctx, field.lhs)
        if (!this.isValidReturnType(lhs)) return lhs

        if (field.rhs === undefined) {
            return this.unsafeSuccess(field.resolve(lhs.value, null))
        }

        const rhs = await this.resolveCode(ctx, field.rhs)
        if (!this.isValidReturnType(rhs)) return rhs

        return this.unsafeSuccess(field.resolve(lhs.value, rhs.value))
    }

    private async resolveCode(
        ctx: Context,
        { resolve: resolver, functions }: Partial<Omit<IExtendedCompiledFunctionField, "value">> = {}
    ): Promise<Return> {
        if (!resolver || !functions) return this.unsafeSuccess(null)

        const args = new Array(functions.length)
        if (functions.length === 0) return this.unsafeSuccess(resolver(args))

        for (let i = 0, len = functions.length; i < len; i++) {
            const fn = functions[i]
            const rt = await fn.execute(ctx)
            if (!this.isValidReturnType(rt)) return rt
            args![i] = rt.value
        }

        return this.unsafeSuccess(resolver(args!))
    }

    private argTypeRejection(arg: IArg, value: unknown) {
        return this.error(ErrorType.InvalidArgType, `${value}`, arg.name, ArgType[arg.type])
    }

    private resolveNumber(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const value = Number(str)
        if (isNaN(value as number)) return
        return value
    }

    private resolveBigInt(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return BigInt(str)
    }

    private resolveColor(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return resolveColor(str)
    }

    private resolvePermission(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!(str in PermissionFlagsBits)) return
        return str
    }

    private resolveString(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return str
    }

    private get resolveUnknown() {
        return this.resolveString.bind(this)
    }

    private resolveTime(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        try {
            return !isNaN(Number(str)) ? Number(str) : TimeParser.parseToMS(str)
        } catch (error: any) {
            return
        }
    }

    private resolveEnum(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return arg.enum![str]
    }

    private resolveBoolean(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return str === "true" ? true : str === "false" ? false : undefined
    }

    private resolveMessage(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return

        const ch = this.resolvePointer(arg, ref, ctx.channel) as TextChannel | undefined
        return ch?.messages?.fetch(str).catch(ctx.noop)
    }

    private resolveChannel(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return ctx.client.channels.fetch(str)
    }

    private async resolveTextChannel(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const ch = await this.resolveChannel(ctx, arg, str, ref)
        if (!ch || !("messages" in ch)) return
        return ch
    }

    private resolveGuild(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return ctx.client.guilds.cache.get(str)
    }

    private resolveJson(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return parseJSON(str)
    }

    private resolveUser(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return ctx.client.users.fetch(str).catch(ctx.noop)
    }

    private resolveRoleOrUser(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return this.resolveRole(ctx, arg, str, ref) ?? this.resolveUser(ctx, arg, str, ref)
    }

    private resolveGuildEmoji(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const fromUrl = CompiledFunction.CDNIdRegex.exec(str)
        if (fromUrl !== null) return ctx.client.emojis.cache.get(fromUrl[2])

        const parsed = parseEmoji(str)
        const id = parsed?.id ?? str
        return ctx.client.emojis.cache.get(id)
    }

    private async resolveApplicationEmoji(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const fromUrl = CompiledFunction.CDNIdRegex.exec(str)
        if (fromUrl !== null) return await ctx.client.application.emojis.fetch(fromUrl[2]).catch(ctx.noop)

        const parsed = parseEmoji(str)
        const id = parsed?.id ?? str
        if (!CompiledFunction.IdRegex.test(id)) return
        return await ctx.client.application.emojis.fetch(id).catch(ctx.noop)
    }

    private async resolveEmoji(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const fromUrl = CompiledFunction.CDNIdRegex.exec(str)
        if (fromUrl !== null) return this.resolveGuildEmoji(ctx, arg, fromUrl[2], ref) ?? await this.resolveApplicationEmoji(ctx, arg, fromUrl[2], ref)

        const parsed = parseEmoji(str)
        const id = parsed?.id ?? str
        if (!CompiledFunction.IdRegex.test(id)) return
        return this.resolveGuildEmoji(ctx, arg, id, ref) ?? await this.resolveApplicationEmoji(ctx, arg, id, ref)
    }

    private resolveForumTag(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return (this.resolvePointer(arg, ref, ctx.channel) as ForumChannel)?.availableTags.find(
            (x) => x.id === str || x.name === str
        )
    }

    private resolveSticker(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const fromUrl = CompiledFunction.CDNIdRegex.exec(str)
        if (fromUrl !== null) return ctx.client.fetchSticker(fromUrl[2]).catch(ctx.noop)

        if (!CompiledFunction.IdRegex.test(str)) return
        return ctx.client.fetchSticker(str).catch(ctx.noop)
    }

    private async resolveAttachment(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const splits = str.split(/(\\\\|\/)/)

        if (CompiledFunction.URLRegex.test(str)) {
            const name = splits[splits.length - 1] ?? splits[splits.length - 2]
            const buffer = await fetch(str).then((x) => x.arrayBuffer())
            return new AttachmentBuilder(Buffer.from(buffer), {
                name,
            })
        }

        const exists = existsSync(str)
        const name = exists ? splits[splits.length - 1] ?? splits[splits.length - 2] : null

        return new AttachmentBuilder(exists ? str : Buffer.from(str, "utf-8"), {
            name: name ?? undefined,
        })
    }

    private resolveMember(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return this.resolvePointer(arg, ref, ctx.guild)?.members.fetch(str).catch(ctx.noop)
    }

    private resolveAutomodRule(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return this.resolvePointer(arg, ref, ctx.guild)?.autoModerationRules.fetch(str).catch(ctx.noop)
    }

    private resolveScheduledEvent(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return this.resolvePointer(arg, ref, ctx.guild)?.scheduledEvents.fetch(str).catch(ctx.noop)
    }

    private resolveSoundboardSound(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return this.resolvePointer(arg, ref, ctx.guild)?.soundboardSounds.fetch(str).catch(ctx.noop)
    }

    private resolveStageInstance(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        const chan = ctx.client.channels.cache.get(str)
        const data = chan instanceof StageChannel ? chan.stageInstance : this.resolvePointer(arg, ref, ctx.guild)?.stageInstances
        const instance = data instanceof StageInstance ? data : data?.cache.get(str)
        if (!instance) return
        return instance
    }

    private async resolveReaction(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        const parsed = parseEmoji(str)
        if (!parsed) return

        const identifier = parsed.id ?? parsed.name
        return (await this.resolvePointer(arg, ref, ctx.message)?.fetch().catch(ctx.noop))?.reactions.cache.get(identifier)
    }

    private resolveURL(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.URLRegex.test(str)) {
            const em = parseEmoji(str)
            if (em !== null)
                return `https://cdn.discordapp.com/emojis/${em.id}.${
                    em.animated ? "gif" : "png"
                }?size=128&quality=lossless`
            return
        }

        return str
    }

    private resolveInvite(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return ctx.client.fetchInvite(str).catch(ctx.noop)
    }

    private resolveWebhook(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        if (!CompiledFunction.IdRegex.test(str)) return
        return ctx.client.fetchWebhook(str).catch(ctx.noop)
    }

    private resolveOverwritePermission(
        ctx: Context,
        arg: IArg,
        str: string,
        ref: Array<unknown>
    ): OverwritePermission | undefined {
        const symbol = str[0]
        if (!(symbol in CompiledFunction.OverwriteSymbolMapping)) return
        const perm = str.slice(1)
        if (!(perm in PermissionFlagsBits)) return
        return {
            permission: perm as PermissionsString,
            value: CompiledFunction.OverwriteSymbolMapping[
                symbol as keyof typeof CompiledFunction.OverwriteSymbolMapping
            ],
        }
    }

    private resolveRole(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return this.resolvePointer(arg, ref, ctx.guild)?.roles.cache.get(str)
    }

    private resolveDate(ctx: Context, arg: IArg, str: string, ref: Array<unknown>) {
        return new Date(isNaN(Number(str)) ? str : Number(str))
    }

    private resolvePointer<T>(arg: IArg, ref: Array<unknown>, fallback?: T) {
        const ptr = (ref[arg.pointer!] as T) ?? fallback
        return arg.pointerProperty ? (ptr?.[arg.pointerProperty as keyof T] as T) : ptr
    }

    private async resolveArg(
        ctx: Context,
        arg: IArg,
        field: IExtendedCompiledFunctionField,
        value: unknown,
        ref: UnwrapArgs<T>
    ): Promise<Return> {
        const strValue = `${value}`

        if (!arg.required && !value) {
            return this.unsafeSuccess(value ?? null)
        }

        if (field !== undefined) {
            field.resolveArg ??= (this[CompiledFunction.toResolveArgString(arg.type) as keyof this] as Function).bind(this)
            value = field.resolveArg?.(ctx, arg, strValue, ref)
            if (value instanceof Promise) value = await value
        }

        if (value === undefined) return this.argTypeRejection(arg, strValue)

        if (value === null && arg.required) {
            return this.error(ErrorType.MissingArg, this.data.name, arg.name)
        }

        if (arg.check !== undefined && !arg.check(value)) return this.argTypeRejection(arg, strValue)

        return this.unsafeSuccess(value ?? null)
    }

    public get hasFields() {
        return this.data.fields !== null
    }

    public error(err: Error): Return<ReturnType.Error>
    public error<T extends ErrorType>(type: T, ...args: GetErrorArgs<T>): Return<ReturnType.Error>
    public error<T extends ErrorType>(type: T | Error, ...args: GetErrorArgs<T>): Return<ReturnType.Error> {
        if (type instanceof Error) return new Return(ReturnType.Error, type)
        return new Return(ReturnType.Error, new ForgeError(this, type, ...args))
    }

    public customError(msg: string) {
        return this.error(ErrorType.Custom, msg)
    }

    public async execute(ctx: Context): Promise<Return> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!this.fn.data.unwrap) return this.fn.data.execute.call(this, ctx)

        const args = await this.resolveArgs(ctx)
        if (!this.isValidReturnType(args)) return args

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.fn.data.execute.call(this, ctx, args.value ?? [])
    }

    private isValidReturnType(rt: Return) {
        return rt.success
    }

    private async fail(ctx: Context, code?: IExtendedCompiledFunctionField) {
        if (code) {
            const resolved = await this.resolveCode(ctx, code)
            if (!this["isValidReturnType"](resolved)) return resolved
            ctx.container.content = resolved.value as string
            await ctx.container.send(ctx.obj)
        }

        return this.stop()
    }

    public static toResolveArgString(type: ArgType) {
        return `resolve${ArgType[type] as keyof typeof ArgType}` as const
    }

    public getFunction(fieldIndex: number, ref: NativeFunction) {
        return this.getFunctions(fieldIndex, ref)?.[0] as CompiledFunction | undefined
    }

    public getFunctions(fieldIndex: number, ref: NativeFunction) {
        return this.hasFields
            ? (this.data.fields![fieldIndex] as IExtendedCompiledFunctionField).functions.filter(
                (x) => x.data.name === ref.name
            )
            : new Array<CompiledFunction>()
    }

    public return(value: ReturnValue<ReturnType.Return>) {
        return new Return(ReturnType.Return, value)
    }

    public stop() {
        return new Return(ReturnType.Stop, null)
    }

    public break() {
        return new Return(ReturnType.Break, null)
    }

    public continue() {
        return new Return(ReturnType.Continue, null)
    }

    public successJSON(value: ReturnValue<ReturnType.Success>) {
        return this.success(typeof value !== "string" ? JSON.stringify(value, (key, val) => (typeof val === "bigint" ? val.toString() : val), 4) : value)
    }

    public successFormatted(value: ReturnValue<ReturnType.Success>) {
        return this.success(typeof value !== "string" ? inspect(value, { depth: Infinity }) : value)
    }

    public unsafeSuccess(value: ReturnValue<ReturnType.Success> = null) {
        return new Return(ReturnType.Success, value)
    }

    public success(value: ReturnValue<ReturnType.Success> = null) {
        return new Return(ReturnType.Success, this.data.negated ? null : this.data.count !== null && typeof(value) === "string" ? value.split(this.data.count).length : value)
    }
}