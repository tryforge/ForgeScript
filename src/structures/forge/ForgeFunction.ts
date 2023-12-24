import { Compiler, IExtendedCompilationResult } from "../../core/Compiler"
import { Context } from "../@internal/Context"
import { ErrorType, ForgeError } from "./ForgeError"
import { Return, ReturnType } from "../@internal/Return"

export interface IForgeFunction {
    name: string
    params?: string[]
    code: string
    path?: string
}

export class ForgeFunction {
    public readonly compiled: IExtendedCompilationResult

    public constructor(public readonly data: IForgeFunction) {
        data.params ??= []
        this.compiled = Compiler.compile(data.code, this.data.path)
    }

    async call(ctx: Context, args: string[]) {
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
            ctx.setEnvironmentKey(this.data.params![i], args[i])
        }

        for (let i = 0, len = this.compiled.functions.length; i < len; i++) {
            const fn = this.compiled.functions[i]
            const res = await fn.execute(ctx)

            if (res.return) return fn.success(res.value)
            else if (!fn["isValidReturnType"](res)) return res
        }

        return new Return(ReturnType.Success, null)
    }
}
