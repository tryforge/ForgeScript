import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$and",
    category: "unknown",
    version: "1.0.0",
    description: "Validates multiple conditions",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "conditions",
            rest: true,
            required: true,
            type: ArgType.String,
            condition: true,
            description: "The conditions that must match",
        },
    ],
    async execute(ctx) {
        for (let i = 0, len = this.data.fields!.length; i < len; i++) {
            const field = this.data.fields![i] as IExtendedCompiledFunctionConditionField
            const resolved = await this["resolveCondition"](ctx, field)
            if (!this["isValidReturnType"](resolved)) return resolved
            else if (!resolved.value) return this.success(false)
        }

        return this.success(true)
    },
})
