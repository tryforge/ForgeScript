import { BoolValues } from "../core"
import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$onlyIf",
    version: "1.0.0",
    description: "Stop execution if condition is not matched",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "condition",
            condition: true,
            description: "The condition to use",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "code",
            description: "The code to execute if error",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx) {
        const [ condition, code ] = this.data.fields! as [ IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField ]
        const res = await this["resolveCondition"](ctx, condition)
        if (!this["isValidReturnType"](res) || res.value) return res.success ? Return.success() : res
        
        if (code) {
            const resolved = await this["resolveCode"](ctx, code)
            if (!this["isValidReturnType"](resolved)) return resolved
            ctx.container.content = resolved.value as string
            await ctx.container.send(ctx.obj)
            return Return.stop()
        }

        return Return.success()
    },
})