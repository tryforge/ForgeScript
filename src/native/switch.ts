import { ArgType, CompiledFunction, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"
import _case from "./case"

export default new NativeFunction({
    name: "$switch",
    category: "unknown",
    version: "1.0.3",
    description: "Switch-case statement for javascript",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "value",
            description: "The value to match with",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "cases",
            rest: false,
            description: "The cases to use ($case), use $case[default;...] to add a default case",
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const match = await this["resolveCode"](ctx, this.data.fields![0] as IExtendedCompiledFunctionField)
        if (!this["isValidReturnType"](match)) return match

        const value = match.value as string
        const switchCases: CompiledFunction[] = (
            this.data.fields![1] as IExtendedCompiledFunctionField
        ).functions.filter((x) => x.data.name === _case.name)
        const index = switchCases.findIndex(
            (x) => (x.data.fields![0] as IExtendedCompiledFunctionField).value === "default"
        )
        const defaultCase = index === -1 ? null : switchCases.splice(index, 1)[0]

        for (let i = 0, len = switchCases.length; i < len; i++) {
            const cas = switchCases[i]
            const caseValue: Return = await cas["resolveCode"](
                ctx,
                cas.data.fields![0] as IExtendedCompiledFunctionField
            )
            if (!this["isValidReturnType"](caseValue)) return caseValue

            if (caseValue.value === value) {
                return cas.execute(ctx)
            }
        }

        if (defaultCase) return defaultCase.execute(ctx)

        return this.success()
    },
})
