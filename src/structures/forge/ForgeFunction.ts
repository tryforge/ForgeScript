import { ArgType, Context, IArg, IExtendedCompiledFunctionConditionField, NativeFunction } from ".."
import { IExtendedCompilationResult, Compiler, Interpreter } from "../../core"
import isTrue from "../../functions/isTrue"
import { FunctionManager } from "../../managers"
import callFunction from "../../native/other/callFunction"
import { Return, ReturnType } from "../@internal/Return"
import { ForgeError, ErrorType } from "./ForgeError"

export interface IForgeFunctionParam {
    name: string
    type?: ArgType | keyof typeof ArgType
    required?: boolean
}

export interface IForgeFunction {
    name: string
    params?: Array<string | IForgeFunctionParam>
    firstParamCondition?: boolean
    brackets?: boolean
    code: string
    path?: string
}

export class ForgeFunction {
    public compiled?: IExtendedCompilationResult

    public constructor(public readonly data: IForgeFunction) {
        if (!Array.isArray(data.params))
            data.params = []
    }
    
    public populate() {
        FunctionManager.add(this.asNative())
    }

    public asNative() {
        const outer = this
        return new NativeFunction({
            name: `$${this.data.name}`,
            description: "Custom function",
            unwrap: (!!this.data.params?.length && !this.data.firstParamCondition) as any,
            args: this.data.params?.length ? this.data.params.map((x, i) => ({
                name: typeof x === "string" ? x : x.name,
                rest: false,
                condition: i === 0 && !!this.data.firstParamCondition,
                type: typeof x === "string" ? ArgType.String : (typeof x.type === "number" && x.type in ArgType ? x.type : ArgType[x.type!]) ?? ArgType.String,
                required: typeof x === "string" ? true : x.required ?? true
            }) as IArg<ArgType.String>) : undefined,
            brackets: this.data.brackets ?? (this.data.params?.length ? true : undefined),
            async execute(ctx, args: string[]) {
                if (!this.fn.data.unwrap) {
                    if (!this.data.fields || this.data.fields.length === 0) {
                        return outer.call(ctx, args ?? [])
                    }
                    const condition = await this["resolveCondition"](ctx, this.data.fields[0] as IExtendedCompiledFunctionConditionField)
                    if (!this["isValidReturnType"](condition))
                        return condition
                    else if (!isTrue(condition))
                        return this.stop()
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    const params = await this["resolveMultipleArgs"](ctx, ...this.data.fields.slice(1).map((_, i) => i + 1))
                    if (!this["isValidReturnType"](params.return))
                        return params.return
                    return outer.call(ctx, params.args)
                } else {
                    return outer.call(ctx, args ?? [])
                }
            }
        })
    }

    async call(ctx: Context, args: string[]) {
        this.compiled ??= Compiler.compile(this.data.code, this.data.path)

        const params = Array.isArray(this.data.params) ? this.data.params : []
        const required = params.filter(param => typeof param === "string" || param.required !== false)

        if (args.length < required.length)
            return new Return(
                ReturnType.Error,
                new ForgeError(
                    null,
                    ErrorType.Custom,
                    `Calling custom function ${this.data.name} requires ${required.length} arguments, received ${args.length}`
                )
            )

        for (let i = 0, len = params.length; i < len; i++) {
            const param = params[i]
            const name = typeof param === "string" ? param : param.name
            ctx.setEnvironmentKey(name, args[i])
        }

        const result = await Interpreter.run(ctx.clone({
            doNotSend: true,
            allowTopLevelReturn: true,
            data: this.compiled
        }))

        return new Return(result === null ? ReturnType.Stop : ReturnType.Success, result)
    }
}