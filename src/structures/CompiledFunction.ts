import { BaseChannel, Guild } from "discord.js"
import { BoolValues, ICompiledFunction, ICompiledFunctionConditionField, ICompiledFunctionField, WrappedCode, WrappedConditionCode } from "../core/Compiler"
import noop from "../functions/noop"
import { FunctionManager } from "../managers/FunctionManager"
import { Context } from "./Context"
import { ErrorType, ForgeError, GetErrorArgs } from "./ForgeError"
import { ArgType, IArg, NativeFunction, UnwrapArgs } from "./NativeFunction"
import { Return } from "./Return"

export interface IExtendedCompiledFunctionConditionField extends Omit<ICompiledFunctionConditionField, "rhs" | "lhs"> {
    lhs: IExtendedCompiledFunctionField
    rhs?: IExtendedCompiledFunctionField
}

export interface IExtendedCompiledFunctionField extends Omit<ICompiledFunctionField, "functions"> {
    functions: CompiledFunction[]
}

export interface IExtendedCompiledFunction extends Omit<ICompiledFunction, "fields"> {
    fields: (IExtendedCompiledFunctionField | IExtendedCompiledFunctionConditionField)[] | null
}

export class CompiledFunction<T extends [...IArg[]] = IArg[], Unwrap extends boolean = boolean> {
    public static readonly IdRegex = /^(\d{16,23})$/

    public readonly data: IExtendedCompiledFunction
    public readonly fn: NativeFunction<T, Unwrap>

    public constructor(
        raw: ICompiledFunction
    ) {
        this.fn = FunctionManager.get(raw.name) as NativeFunction<T, Unwrap>
        this.data = {
            ...raw,
            fields: raw.fields?.map(
                x => (
                    !("op" in x) ? 
                        {
                            ...x,
                            functions: x.functions.map(x => new CompiledFunction(x))
                        } :
                        {
                            ...x,
                            lhs: {
                                ...x.lhs,
                                functions: x.lhs.functions.map(x => new CompiledFunction(x))
                            },
                            rhs: x.rhs ? {
                                ...x.rhs,
                                functions: x.rhs.functions.map(x => new CompiledFunction(x))
                            } : undefined
                        }
                )
            ) ?? null
        }
    }

    public get display(): string {
        if (this.data.fields === null) return this.data.name
        else {
            const args = new Array<string>()

            for (let i = 0, len = this.data.fields.length;i < len;i++) {
                const field = this.data.fields[i]
                if ("op" in field) {
                    if (field.rhs) {
                        args.push(`${field.lhs.resolve(field.lhs.functions.map(x => x.display))}${field.op}${field.rhs.resolve(field.rhs.functions.map(x => x.display))}`)
                    } else args.push(field.lhs.resolve(field.lhs.functions.map(x => x.display)))
                    continue
                }
                args.push(field.resolve(field.functions.map(x => x.display)))
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

        if (!this.fn.data.args?.length || (this.fn.data.brackets === false && !this.hasFields)) return Return.success(args)
        
        for (let i = 0, len = this.fn.data.args.length;i < len;i++) {
            const arg = this.fn.data.args[i]
            if (!arg.rest) {
                // Assertion because condition fields should never be executed with unwraps.
                const field = this.data.fields?.[i] as IExtendedCompiledFunctionField
                const resolved = await this.resolveCode(ctx, field)
                if (!this.isValidReturnType(resolved)) return resolved
                
                const val = await this.resolveArg(ctx, arg, resolved.value, args)
                if (!this.isValidReturnType(val)) return val
                args[i] = val.value as UnwrapArgs<T>[number]
            } else {
                const fields = this.data.fields?.slice(i)
                const values = new Array()

                if (!fields?.length) {
                    args[i] = values as UnwrapArgs<T>[number]
                    break
                }

                for (let x = 0, len = fields.length;x < len;x++) {
                    // Assertion because condition fields should never be executed with unwraps.
                    const field = fields[x] as IExtendedCompiledFunctionField
                    const resolved = await this.resolveCode(ctx, field)
                    if (!this.isValidReturnType(resolved)) return resolved
                    
                    const val = await this.resolveArg(ctx, arg, resolved.value, args)
                    if (!this.isValidReturnType(val)) return val

                    values[x] = val.value as UnwrapArgs<T>[number]
                }

                args[i] = values as UnwrapArgs<T>[number]
            }
        }

        return Return.success(args)
    }

    private async resolveCondition(ctx: Context, field: IExtendedCompiledFunctionConditionField) {
        const lhs = await this.resolveCode(ctx, field.lhs)
        if (!this.isValidReturnType(lhs)) return lhs

        if (field.rhs === undefined) return Return.success(field.resolve(lhs.value, null))
        
        const rhs = await this.resolveCode(ctx, field.rhs)
        if (!this.isValidReturnType(rhs)) return rhs

        return Return.success(field.resolve(lhs.value, rhs.value))
    }

    private async resolveCode(ctx: Context, { resolve: resolver, functions }: Partial<Omit<IExtendedCompiledFunctionField, "value">> = {}): Promise<Return> {
        if (!resolver || !functions) return Return.success(null)

        const args = new Array(functions.length)
        if (functions.length === 0) return Return.success(resolver(args))

        for (let i = 0, len = functions.length;i < len;i++) {
            const fn = functions[i]
            const rt = await fn.execute(ctx)
            if (!this.isValidReturnType(rt)) return rt
            args[i] = rt.value
        }

        return Return.success(resolver(args))
    }

    private argTypeRejection(arg: IArg, value: unknown) {
        return Return.error(
            this.error(
                ErrorType.InvalidArgType,
                `${value}`,
                arg.name,
                ArgType[arg.type]
            )
        )
    }

    private async resolveArg(ctx: Context, arg: IArg, value: unknown, ref: UnwrapArgs<T>): Promise<Return> {
        const strValue = `${value}`
        const reject = this.argTypeRejection.bind(this, arg, strValue)

        if (!arg.required && !value) {
            return Return.success(value ?? null)
        }

        switch (arg.type) {
            case ArgType.Number: {
                value = Number(value)
                break
            }

            case ArgType.Guild: {
                if (!CompiledFunction.IdRegex.test(strValue)) return reject()
                value = ctx.client.guilds.cache.get(strValue)
                if (!value) return reject()
                break
            }

            case ArgType.Role: {
                if (!CompiledFunction.IdRegex.test(strValue)) return reject()
                value = (ref[arg.pointer!] as Guild).roles.cache.get(strValue)
                if (!value) return reject()
                break
            }

            case ArgType.Member: {
                if (!CompiledFunction.IdRegex.test(strValue)) return reject()
                value = (ref[arg.pointer!] as Guild).members.fetch(strValue).catch(noop)
                if (!value) return reject()
                break
            }

            case ArgType.String: {
                break
            }

            case ArgType.Json: {
                try {
                    const json = JSON.parse(strValue)
                    value = json
                } catch (error: unknown) {
                    return reject()
                }

                break
            }

            case ArgType.User: {
                if (!CompiledFunction.IdRegex.test(strValue)) return reject()
                
                const user = await ctx.client.users.fetch(strValue).catch(noop)
                
                if (!user) return reject()
                
                value = user
                break
            }

            case ArgType.Channel: {
                if (!CompiledFunction.IdRegex.test(strValue)) return reject()
                
                const ch = ctx.client.channels.cache.get(strValue)
                
                if (!ch) return reject()
                
                value = ch
                break
            }

            case ArgType.Message: {
                if (!CompiledFunction.IdRegex.test(strValue)) return reject()
                
                const ch = (ref[arg.pointer!] ?? ctx.channel) as BaseChannel | null
                
                if (!ch || !ch.isTextBased()) return reject()
                
                const msg = await ch.messages.fetch(strValue).catch(noop)
                
                if (!msg) return reject()
                
                value = msg
                break
            }

            case ArgType.Boolean: {
                const bool = BoolValues[strValue as keyof typeof BoolValues]
                
                if (bool === undefined) return reject()
                
                value = bool
                
                break
            }
            
            case ArgType.Enum: {
                const val = arg.enum![strValue]
                
                if (val === undefined) return reject()
                
                value = val
                break
            }

            default: {
                throw new Error(`Unhandled arg type: ${ArgType[arg.type]}`)
            }
        }

        if (value === null && arg.required) {
            return Return.error(this.error(ErrorType.MissingArg, this.data.name, arg.name))
        }

        if (arg.check !== undefined && !arg.check(value)) return reject()

        return Return.success(value ?? null)
    }

    public get hasFields() {
        return this.data.fields !== null
    }

    public error<T extends ErrorType>(type: T, ...args: GetErrorArgs<T>): ForgeError<T> {
        return new ForgeError(this, type, ...args)
    }

    public async execute(ctx: Context): Promise<Return> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!this.fn.data.unwrap) return this.fn.data.execute.call(this, ctx)

        const args = await this.resolveArgs(ctx)
        if (!this.isValidReturnType(args)) return args

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.fn.data.execute.call(this, ctx, args.value)
    }

    private isValidReturnType(rt: Return) {
        return rt.success
    }
}