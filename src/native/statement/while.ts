import {
    ArgType,
    IExtendedCompiledFunctionConditionField,
    IExtendedCompiledFunctionField,
    NativeFunction,
    Return,
} from "../../structures"

export default new NativeFunction({
    name: "$while",
    category: "statement",
    version: "1.0.3",
    description: "Executes code while a condition is true",
    unwrap: false,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "condition",
            condition: true,
            description: "The condition to validate",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            rest: false,
            required: true,
            type: ArgType.String,
            description: "The code to execute",
        },
    ],
    async execute(ctx) {
        const condition = this.data.fields![0] as IExtendedCompiledFunctionConditionField
        const code = this.data.fields![1] as IExtendedCompiledFunctionField

        for (;;) {
            const cond = await this["resolveCondition"](ctx, condition)
            if (!this["isValidReturnType"](cond)) return cond
            else if (!cond.value) break

            const exec = await this["resolveCode"](ctx, code)
            if (exec.success || exec.continue) continue
            else if (exec.break) break
            else return exec
        }

        return this.success()
    },
})
