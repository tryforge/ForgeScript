import { ArgType, Context, IArg, IExtendedCompiledFunctionConditionField, NativeFunction } from ".."
import { IExtendedCompilationResult, Compiler, Interpreter } from "../../core"
import isTrue from "../../functions/isTrue"
import { FunctionManager } from "../../managers"
import callFunction from "../../native/other/callFunction"
import { Return, ReturnType } from "../@internal/Return"
import { ForgeError, ErrorType } from "./ForgeError"

export interface IForgeFunction {
    name: string
    params?: string[]
    firstParamCondition?: boolean
    code: string
    path?: string
}

export class ForgeFunction {
    public compiled?: IExtendedCompilationResult

    public constructor(public readonly data: IForgeFunction) {
        data.params ??= []
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
            args: this.data.params?.length ? this.data.params!.map((x, i) => ({
                name: x.slice(0, x.endsWith("?") ? -1 : undefined),
                rest: false,
                condition: i === 0 && !!this.data.firstParamCondition,
                type: ArgType.String,
                required: !x.endsWith("?")
            }) as IArg<ArgType.String>) : undefined,
            brackets: this.data.params?.length ? true : undefined,
            async execute(ctx, args: string[]) {
                if (!this.fn.data.unwrap) {
                    const condition = await this["resolveCondition"](ctx, this.data.fields![0] as IExtendedCompiledFunctionConditionField)
                    if (!this["isValidReturnType"](condition))
                        return condition
                    else if (!isTrue(condition))
                        return this.stop()
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    const params = await this["resolveMultipleArgs"](ctx, ...this.data.fields!.slice(1).map((_, i) => i + 1))
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

        if (this.data.params!.length !== args.length)
            return new Return(
                ReturnType.Error,
                new ForgeError(
                    null,
                    ErrorType.Custom,
                    `Calling custom function ${this.data.name} requires ${
                        this.data.params!.length
                    } arguments, received ${args.length}`
                )
            )

        for (let i = 0, len = this.data.params!.length; i < len; i++) {
            ctx.setEnvironmentKey(this.data.params![i].slice(0, this.data.params![i].endsWith("?") ? -1 : undefined), args[i] ?? "")
        }

        const result = await Interpreter.run(ctx.clone({
            doNotSend: true,
            allowTopLevelReturn: true,
            data: this.compiled
        }))

        return new Return(result === null ? ReturnType.Stop : ReturnType.Success, result)
    }
}
