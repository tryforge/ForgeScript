import { ArgType, NativeFunction, Return } from "../structures"
import _else from "./else"
import elseif from "./elseif"
import ifFunc from "./if"

export default new NativeFunction({
    name: "$ifx",
    category: "unknown",
    version: "1.2.0",
    description: "WIP if statements",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "block",
            description: "The if, elseif, else blocks",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    experimental: true,
    async execute(ctx) {
        const ifStatement = this.getFunction(0, ifFunc)!
        const elseIfStatements = this.getFunctions(0, elseif)
        const elseStatement = this.getFunction(0, _else)

        const ifRun = await ifStatement.execute(ctx)
        if (!this["isValidReturnType"](ifRun) || ifRun.value !== null) return ifRun

        for (let i = 0, len = elseIfStatements.length;i < len;i++) {
            const statement = elseIfStatements[i]
            const statementRun = await statement.execute(ctx)
            if (!this["isValidReturnType"](statementRun) || statementRun.value !== null) return statementRun
        }

        return elseStatement?.execute(ctx) ?? this.success()
    },
})