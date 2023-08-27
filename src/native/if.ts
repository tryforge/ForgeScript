import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$if",
    description: "Creates a if statement",
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to check against",
            rest: false,
            type: ArgType.String,
            condition: true
        },
        {
            name: "if true",
            description: "The code to run if true",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "if false",
            description: "The code to run if false",
            type: ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    async execute(ctx) {
        const condition = await this["resolveCondition"](ctx, this.data.fields![0] as IExtendedCompiledFunctionConditionField)
        if (!this["isValidReturnType"](condition)) return condition
        
        const fieldToRun = (condition.value ? this.data.fields![1] : this.data.fields![2]) as IExtendedCompiledFunctionField | undefined
        if (!fieldToRun) return Return.success()

        return this["resolveCode"](ctx, fieldToRun.resolve, fieldToRun.functions)
    },
})