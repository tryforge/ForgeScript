import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$or",
    description: "Validates one condition",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "conditions",
            rest: true,
            required: true,
            type: ArgType.String,
            condition: true,
            description: "The conditions that must match one"
        }
    ],
    async execute(ctx) {
        for (let i = 0, len = this.data.fields!.length;i < len;i++) {
            const field = this.data.fields![i] as IExtendedCompiledFunctionConditionField
            const resolved = await this["resolveCondition"](ctx, field)
            if (!this["isValidReturnType"](resolved)) return resolved
            else if (resolved.value) return Return.success(true) 
        }

        return Return.success(false)
    },
})