"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompiledFunction = void 0;
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const util_1 = require("util");
const constants_1 = require("../../constants");
const parseJSON_1 = __importDefault(require("../../functions/parseJSON"));
const managers_1 = require("../../managers");
const ForgeError_1 = require("../forge/ForgeError");
const NativeFunction_1 = require("./NativeFunction");
const Return_1 = require("./Return");
const hex_1 = require("../../functions/hex");
class CompiledFunction {
    static OverwriteSymbolMapping = {
        "/": null,
        "+": true,
        "-": false,
    };
    static IdRegex = /^(\d{16,23})$/;
    static URLRegex = /^http?s:\/\//;
    static CDNIdRegex = /https?:\/\/cdn.discordapp.com\/(emojis|stickers)\/(\d+)/;
    data;
    fn;
    constructor(raw) {
        this.fn = managers_1.FunctionManager.get(raw.name);
        this.data = {
            ...raw,
            fields: raw.fields?.map((x) => !("op" in x)
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
                }) ?? null,
        };
    }
    displayField(i) {
        const field = this.data.fields[i];
        if ("op" in field) {
            if (field.rhs) {
                return `${field.lhs.resolve(field.lhs.functions.map((x) => x.display))}${field.op}${field.rhs.resolve(field.rhs.functions.map((x) => x.display))}`;
            }
            else
                return field.lhs.resolve(field.lhs.functions.map((x) => x.display));
        }
        return field.resolve(field.functions.map((x) => x.display));
    }
    get display() {
        if (this.data.fields === null)
            return this.data.name;
        else {
            const args = new Array();
            for (let i = 0, len = this.data.fields.length; i < len; i++) {
                args.push(this.displayField(i));
            }
            return `${this.data.name}[${args.join(";")}]`;
        }
    }
    /**
     * Resolves fields of a function.
     * @param ctx
     * @returns
     */
    async resolveArgs(ctx) {
        const args = new Array(this.fn.data.args?.length ?? 0);
        if (!this.fn.data.args?.length || (this.fn.data.brackets === false && !this.hasFields))
            return this.unsafeSuccess(args);
        for (let i = 0, len = this.fn.data.args.length; i < len; i++) {
            const rt = await this.resolveUnhandledArg(ctx, i, args);
            if (!this.isValidReturnType(rt))
                return rt;
            args[i] = rt.value;
        }
        return this.unsafeSuccess(args);
    }
    async resolveMultipleArgs(ctx, ...indexes) {
        const args = new Array(indexes.length);
        for (let i = 0, len = indexes.length; i < len; i++) {
            const index = indexes[i];
            const arg = await this.resolveUnhandledArg(ctx, index, args);
            if (!this.isValidReturnType(arg))
                return {
                    args,
                    return: arg,
                };
            args[i] = arg.value;
        }
        return {
            args,
            return: this.unsafeSuccess(),
        };
    }
    /**
     * Does not account for condition fields.
     * @param ctx
     * @param index
     * @returns
     */
    async resolveUnhandledArg(ctx, i, ref = []) {
        const arg = this.fn.data.args[i];
        if (!arg.rest) {
            // Assertion because condition fields should never be executed with unwraps.
            const field = this.data.fields?.[i];
            const resolved = await this.resolveCode(ctx, field);
            if (!this.isValidReturnType(resolved))
                return resolved;
            const val = await this.resolveArg(ctx, arg, field, resolved.value, ref);
            if (!this.isValidReturnType(val))
                return val;
            return this.unsafeSuccess(val.value);
        }
        else {
            const fields = this.data.fields?.slice(i);
            const values = new Array();
            if (!fields?.length) {
                return this.unsafeSuccess(values);
            }
            for (let x = 0, len = fields.length; x < len; x++) {
                // Assertion because condition fields should never be executed with unwraps.
                const field = fields[x];
                const resolved = await this.resolveCode(ctx, field);
                if (!this.isValidReturnType(resolved))
                    return resolved;
                const val = await this.resolveArg(ctx, arg, field, resolved.value, ref);
                if (!this.isValidReturnType(val))
                    return val;
                values[x] = val.value;
            }
            return this.unsafeSuccess(values);
        }
    }
    async resolveCondition(ctx, field) {
        const lhs = await this.resolveCode(ctx, field.lhs);
        if (!this.isValidReturnType(lhs))
            return lhs;
        if (field.rhs === undefined) {
            return this.unsafeSuccess(field.resolve(lhs.value, null));
        }
        const rhs = await this.resolveCode(ctx, field.rhs);
        if (!this.isValidReturnType(rhs))
            return rhs;
        return this.unsafeSuccess(field.resolve(lhs.value, rhs.value));
    }
    async resolveCode(ctx, { resolve: resolver, functions } = {}) {
        if (!resolver || !functions)
            return this.unsafeSuccess(null);
        const args = new Array(functions.length);
        if (functions.length === 0)
            return this.unsafeSuccess(resolver(args));
        for (let i = 0, len = functions.length; i < len; i++) {
            const fn = functions[i];
            const rt = await fn.execute(ctx);
            if (!this.isValidReturnType(rt))
                return rt;
            args[i] = rt.value;
        }
        return this.unsafeSuccess(resolver(args));
    }
    argTypeRejection(arg, value) {
        return this.error(ForgeError_1.ErrorType.InvalidArgType, `${value}`, arg.name, NativeFunction_1.ArgType[arg.type]);
    }
    resolveNumber(ctx, arg, str, ref) {
        const value = Number(str);
        if (isNaN(value))
            return;
        return value;
    }
    resolveBigInt(ctx, arg, str, ref) {
        return BigInt(str);
    }
    resolveColor(ctx, arg, str, ref) {
        return (0, hex_1.resolveColor)(str);
    }
    resolvePermission(ctx, arg, str, ref) {
        if (!(str in discord_js_1.PermissionFlagsBits))
            return;
        return str;
    }
    resolveString(ctx, arg, str, ref) {
        return str;
    }
    get resolveUnknown() {
        return this.resolveString.bind(this);
    }
    resolveTime(ctx, arg, str, ref) {
        try {
            return !isNaN(Number(str)) ? Number(str) : constants_1.TimeParser.parseToMS(str);
        }
        catch (error) {
            return;
        }
    }
    resolveEnum(ctx, arg, str, ref) {
        return arg.enum[str];
    }
    resolveBoolean(ctx, arg, str, ref) {
        return str === "true" ? true : str === "false" ? false : undefined;
    }
    resolveMessage(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        const ch = this.resolvePointer(arg, ref, ctx.channel);
        return str === ctx.message?.id ? ctx.message : ch?.messages?.fetch(str).catch(ctx.noop);
    }
    resolveChannel(ctx, arg, str, ref) {
        return ctx.client.channels.cache.get(str);
    }
    resolveTextChannel(ctx, arg, str, ref) {
        const ch = ctx.client.channels.cache.get(str);
        if (!ch || !("messages" in ch))
            return;
        return ch;
    }
    resolveGuild(ctx, arg, str, ref) {
        return ctx.client.guilds.cache.get(str);
    }
    resolveJson(ctx, arg, str, ref) {
        return (0, parseJSON_1.default)(str);
    }
    resolveUser(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.users.fetch(str).catch(ctx.noop);
    }
    resolveRoleOrUser(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return this.resolveRole(ctx, arg, str, ref) ?? this.resolveUser(ctx, arg, str, ref);
    }
    resolveGuildEmoji(ctx, arg, str, ref) {
        const fromUrl = CompiledFunction.CDNIdRegex.exec(str);
        if (fromUrl !== null)
            return ctx.client.emojis.cache.get(fromUrl[2]);
        const parsed = (0, discord_js_1.parseEmoji)(str);
        const id = parsed?.id ?? str;
        return ctx.client.emojis.cache.get(id);
    }
    resolveForumTag(ctx, arg, str, ref) {
        return this.resolvePointer(arg, ref, ctx.channel)?.availableTags.find((x) => x.id === str || x.name === str);
    }
    resolveSticker(ctx, arg, str, ref) {
        const fromUrl = CompiledFunction.CDNIdRegex.exec(str);
        if (fromUrl !== null)
            return ctx.client.fetchSticker(fromUrl[2]).catch(ctx.noop);
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.fetchSticker(str).catch(ctx.noop);
    }
    async resolveAttachment(ctx, arg, str, ref) {
        const splits = str.split(/(\\\\|\/)/);
        if (CompiledFunction.URLRegex.test(str)) {
            const name = splits[splits.length - 1] ?? splits[splits.length - 2];
            const buffer = await fetch(str).then((x) => x.arrayBuffer());
            return new discord_js_1.AttachmentBuilder(Buffer.from(buffer), {
                name,
            });
        }
        const exists = (0, fs_1.existsSync)(str);
        const name = exists ? splits[splits.length - 1] ?? splits[splits.length - 2] : null;
        return new discord_js_1.AttachmentBuilder(exists ? str : Buffer.from(str, "utf-8"), {
            name: name ?? undefined,
        });
    }
    resolveMember(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return this.resolvePointer(arg, ref, ctx.guild)?.members.fetch(str).catch(ctx.noop);
    }
    resolveReaction(ctx, arg, str, ref) {
        const reactions = this.resolvePointer(arg, ref, ctx.message)?.reactions;
        const parsed = (0, discord_js_1.parseEmoji)(str);
        if (!parsed)
            return;
        const identifier = parsed.id ?? parsed.name;
        return reactions?.cache.get(identifier);
    }
    resolveURL(ctx, arg, str, ref) {
        if (!CompiledFunction.URLRegex.test(str)) {
            const em = (0, discord_js_1.parseEmoji)(str);
            if (em !== null)
                return `https://cdn.discordapp.com/emojis/${em.id}.${em.animated ? "gif" : "png"}?size=128&quality=lossless`;
            return;
        }
        return str;
    }
    resolveInvite(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.fetchInvite(str).catch(ctx.noop);
    }
    resolveWebhook(ctx, arg, str, ref) {
        if (!CompiledFunction.IdRegex.test(str))
            return;
        return ctx.client.fetchWebhook(str).catch(ctx.noop);
    }
    resolveOverwritePermission(ctx, arg, str, ref) {
        const symbol = str[0];
        if (!(symbol in CompiledFunction.OverwriteSymbolMapping))
            return;
        const perm = str.slice(1);
        if (!(perm in discord_js_1.PermissionFlagsBits))
            return;
        return {
            permission: perm,
            value: CompiledFunction.OverwriteSymbolMapping[symbol],
        };
    }
    resolveRole(ctx, arg, str, ref) {
        return this.resolvePointer(arg, ref, ctx.guild)?.roles.cache.get(str);
    }
    resolveDate(ctx, arg, str, ref) {
        return new Date(str);
    }
    resolvePointer(arg, ref, fallback) {
        const ptr = ref[arg.pointer] ?? fallback;
        return arg.pointerProperty ? ptr?.[arg.pointerProperty] : ptr;
    }
    async resolveArg(ctx, arg, field, value, ref) {
        const strValue = `${value}`;
        if (!arg.required && !value) {
            return this.unsafeSuccess(value ?? null);
        }
        if (field !== undefined) {
            field.resolveArg ??= this[CompiledFunction.toResolveArgString(arg.type)].bind(this);
            value = field.resolveArg(ctx, arg, strValue, ref);
            if (value instanceof Promise)
                value = await value;
        }
        if (value === undefined)
            return this.argTypeRejection(arg, strValue);
        if (value === null && arg.required) {
            return this.error(ForgeError_1.ErrorType.MissingArg, this.data.name, arg.name);
        }
        if (arg.check !== undefined && !arg.check(value))
            return this.argTypeRejection(arg, strValue);
        return this.unsafeSuccess(value ?? null);
    }
    get hasFields() {
        return this.data.fields !== null;
    }
    error(type, ...args) {
        if (type instanceof Error)
            return new Return_1.Return(Return_1.ReturnType.Error, type);
        return new Return_1.Return(Return_1.ReturnType.Error, new ForgeError_1.ForgeError(this, type, ...args));
    }
    customError(msg) {
        return this.error(ForgeError_1.ErrorType.Custom, msg);
    }
    async execute(ctx) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!this.fn.data.unwrap)
            return this.fn.data.execute.call(this, ctx);
        const args = await this.resolveArgs(ctx);
        if (!this.isValidReturnType(args))
            return args;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.fn.data.execute.call(this, ctx, args.value ?? []);
    }
    isValidReturnType(rt) {
        return rt.success;
    }
    async fail(ctx, code) {
        if (code) {
            const resolved = await this.resolveCode(ctx, code);
            if (!this["isValidReturnType"](resolved))
                return resolved;
            ctx.container.content = resolved.value;
            await ctx.container.send(ctx.obj);
        }
        return this.stop();
    }
    static toResolveArgString(type) {
        return `resolve${NativeFunction_1.ArgType[type]}`;
    }
    getFunction(fieldIndex, ref) {
        return this.getFunctions(fieldIndex, ref)?.[0];
    }
    getFunctions(fieldIndex, ref) {
        return this.hasFields
            ? this.data.fields[fieldIndex].functions.filter((x) => x.data.name === ref.name)
            : new Array();
    }
    return(value) {
        return new Return_1.Return(Return_1.ReturnType.Return, value);
    }
    stop() {
        return new Return_1.Return(Return_1.ReturnType.Stop, null);
    }
    break() {
        return new Return_1.Return(Return_1.ReturnType.Break, null);
    }
    continue() {
        return new Return_1.Return(Return_1.ReturnType.Continue, null);
    }
    successJSON(value) {
        return this.unsafeSuccess(typeof value !== "string" ? JSON.stringify(value, undefined, 4) : value);
    }
    successFormatted(value) {
        return this.unsafeSuccess(typeof value !== "string" ? (0, util_1.inspect)(value, { depth: Infinity }) : value);
    }
    unsafeSuccess(value = null) {
        return new Return_1.Return(Return_1.ReturnType.Success, value);
    }
    success(value = null) {
        return new Return_1.Return(Return_1.ReturnType.Success, this.data.negated ? null : value);
    }
}
exports.CompiledFunction = CompiledFunction;
//# sourceMappingURL=CompiledFunction.js.map