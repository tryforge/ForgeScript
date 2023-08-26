import { ICompiledFunction, ICompiledFunctionField, WrappedCode } from "../core/Compiler"
import noop from "../functions/noop"
import { FunctionManager } from "../managers/FunctionManager"
import { Context } from "./Context"
import { ErrorType, ForgeError, GetErrorArgs } from "./ForgeError"
import { ArgType, IArg, NativeFunction, UnwrapArgs } from "./NativeFunction"
import { Return } from "./Return"

export interface IExtendedCompiledFunctionField extends Omit<ICompiledFunctionField, "functions"> {
    functions: CompiledFunction[]
}

export interface IExtendedCompiledFunction extends Omit<ICompiledFunction, "fields"> {
    fields: IExtendedCompiledFunctionField[] | null
}

export class CompiledFunction<T extends [...IArg[]] = IArg[], Unwrap extends boolean = boolean> {
    public static readonly IdRegex = /^(\d+)$/

    public readonly data: IExtendedCompiledFunction
    public readonly fn: NativeFunction<T, Unwrap>

    public constructor(
        raw: ICompiledFunction
    ) {
        this.fn = FunctionManager.get(raw.name) as NativeFunction<T, Unwrap>
        this.data = {
            ...raw,
            fields: raw.fields?.map(x => ({
                ...x,
                functions: x.functions.map(x => new CompiledFunction(x))
            })) ?? null
        }
    }

    public get display(): string {
        if (this.data.fields === null) return this.data.name
        else {
            const args = new Array<string>()

            for (let i = 0, len = this.data.fields.length;i < len;i++) {
                const field = this.data.fields[i]
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

        if (!this.fn.data.args?.length) return Return.success(args)
        
        for (let i = 0, len = this.fn.data.args.length;i < len;i++) {
            const arg = this.fn.data.args[i]
            if (!arg.rest) {
                const field = this.data.fields?.[i]
                const resolved = await this.resolveCode(ctx, field?.resolve, field?.functions)
                if (!this.isValidReturnType(resolved)) return resolved
                
                const val = await this.resolveArg(ctx, arg, resolved.value)
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
                    const field = fields[x]
                    const resolved = await this.resolveCode(ctx, field.resolve, field.functions)
                    if (!this.isValidReturnType(resolved)) return resolved
                    
                    const val = await this.resolveArg(ctx, arg, resolved.value)
                    if (!this.isValidReturnType(val)) return val

                    values[x] = val.value as UnwrapArgs<T>[number]
                }

                args[i] = values as UnwrapArgs<T>[number]
            }
        }

        return Return.success(args)
    }

    private async resolveCode(ctx: Context, resolver?: WrappedCode, functions?: CompiledFunction[]): Promise<Return> {
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

    private async resolveArg(ctx: Context, arg: IArg, value: unknown): Promise<Return> {
        const reject = this.argTypeRejection.bind(this, arg, value)
        const strValue = `${value}`

        if (!arg.required && !value) {
            return Return.success(null)
        }

        switch (arg.type) {
            case ArgType.Number: {
                value = Number(value)
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

            default: {
                throw new Error(`Unhandled arg type: ${ArgType[arg.type]}`)
            }
        }

        if (value === null && arg.required) {
            return Return.error(this.error(ErrorType.MissingArg, this.data.name, arg.name))
        }

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