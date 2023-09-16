import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$checkCondition",
    version: "1.0.0",
    description: "Checks whether a condition is valid",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "condition",
            description: "The condition to use",
            rest: false,
            condition: true,
            type: ArgType.String,
            required: true,
        },
    ],
    async execute(ctx) {
        const cond = await this["resolveCondition"](
            ctx,
            this.data.fields![0] as IExtendedCompiledFunctionConditionField
        )
        if (!this["isValidReturnType"](cond)) return cond
        return Return.success(cond.value)
    },
})
