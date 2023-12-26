import {
    ArgType,
    IExtendedCompiledFunctionConditionField,
    IExtendedCompiledFunctionField,
    NativeFunction,
    Return,
} from "../../structures"

export default new NativeFunction({
    name: "$elseIf",
    version: "1.2.0",
    description: "Creates a else if statement",
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to check against",
            rest: false,
            type: ArgType.String,
            condition: true,
        },
        {
            name: "if true",
            description: "The code to run if true",
            required: true,
            type: ArgType.String,
            rest: false,
        }
    ],
    brackets: true,
    async execute(ctx) {
        const condition = await this["resolveCondition"](
            ctx,
            this.data.fields![0] as IExtendedCompiledFunctionConditionField
        )

        if (!this["isValidReturnType"](condition)) return condition

        if (!condition.value) return this.success()

        return this["resolveCode"](ctx, this.data.fields![1] as IExtendedCompiledFunctionField)
    },
})
