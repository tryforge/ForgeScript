import { BoolValues } from "../core"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayForEach",
    description: "Loops through every element of the array",
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
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const nameField = this.data.fields![0] as IExtendedCompiledFunctionField
        const varField = this.data.fields![1] as IExtendedCompiledFunctionField
        const code = this.data.fields![2] as IExtendedCompiledFunctionField

        const name = await this["resolveCode"](ctx, nameField.resolve, nameField.functions)
        if (!this["isValidReturnType"](name)) return name

        const variable = await this["resolveCode"](ctx, varField.resolve, varField.functions)
        if (!this["isValidReturnType"](variable)) return variable

        const arr = ctx.getEnvironmentKey([ name.value as string ])
        const varName = variable.value as string

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length;i < len;i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(varName, el)
                const rt = await this["resolveCode"](ctx, code.resolve, code.functions) as Return
                
                if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return Return.success()
    },
})