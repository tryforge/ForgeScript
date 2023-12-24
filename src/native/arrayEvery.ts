import isTrue from "../functions/isTrue"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayEvery",
    category: "unknown",
    version: "1.0.0",
    description: "Loops through every element of the array with a condition that must pass every element",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const [nameField, varField, code] = this.data.fields! as IExtendedCompiledFunctionField[]

        const name = await this["resolveCode"](ctx, nameField)
        if (!this["isValidReturnType"](name)) return name

        const variable = await this["resolveCode"](ctx, varField)
        if (!this["isValidReturnType"](variable)) return variable

        const arr = ctx.getEnvironmentKey(name.value as string)
        const varName = variable.value as string

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(varName, el)
                const rt = (await this["resolveCode"](ctx, code)) as Return

                if (rt.return || rt.success) {
                    if (!isTrue(rt)) continue
                    return this.success(false)
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return this.success(true)
    },
})
