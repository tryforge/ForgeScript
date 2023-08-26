import { Compiler, IExtendedCompilationResult } from "../core/Compiler"
import { Context } from "./Context"
import { ErrorType, ForgeError } from "./ForgeError"
import { Return } from "./Return"

export class ForgeFunction {
    public readonly compiled: IExtendedCompilationResult

    public constructor(
        public readonly name: string,
        public readonly params: string[],
        public readonly code: string
    ) {
        this.compiled = Compiler.compile(code)
    }

    async call(ctx: Context, args: string[]) {
        if (this.params.length !== args.length) return Return.error(new ForgeError(
            null,
            ErrorType.Custom,
            `Calling custom function ${this.name} requires ${this.params.length} arguments, received ${args.length}`
        ))

        for (let i = 0, len = this.params.length;i < len;i++) {
            ctx.setEnvironmentKey(this.params[i], args[i])
        }

        for (let i = 0, len = this.compiled.functions.length;i < len;i++) {
            const fn = this.compiled.functions[i]
            const res = await fn.execute(ctx)

            if (res.return) return Return.success(res.value)
            else if (!fn["isValidReturnType"](res)) return res
        }

        return Return.success()
    }
}