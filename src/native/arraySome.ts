
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arraySome",
    version: "1.0.0",
    description: "Loops through every element of the array to find a match",
    unwrap: false,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx) {
        const [ , code ] = this.data.fields! as IExtendedCompiledFunctionField[]

        const { args: { "0": name, "1": variable }, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1)
        if (!this["isValidReturnType"](rt)) return rt

        const arr = ctx.getEnvironmentKey([ name as string ])

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length;i < len;i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(variable, el)
                const rt = await this["resolveCode"](ctx, code) as Return
                
                if (rt.return) {
                    if (!rt.value)
                        continue
                    return Return.success(true)
                }
                else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return Return.success(false)
    },
})