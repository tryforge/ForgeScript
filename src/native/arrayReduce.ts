import { BoolValues } from "../core"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayReduce",
    version: "1.0.0",
    description: "Reduces an array of elements and returns the result",
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
            name: "other variable",
            description: "The other variable to load the second element to",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "code",
            description: "The code to execute for every element, must return a number",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "default value",
            description: "The default value, defaults to 0",
            rest: false,
            type: ArgType.Number
        }
    ],
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const [ nameField, varField, otherVarField, code, defaultValue ] = this.data.fields! as IExtendedCompiledFunctionField[]

        const name = await this["resolveCode"](ctx, nameField)
        if (!this["isValidReturnType"](name)) return name

        const variable = await this["resolveCode"](ctx, varField)
        if (!this["isValidReturnType"](variable)) return variable

        const otherVariable = await this["resolveCode"](ctx, otherVarField)
        if (!this["isValidReturnType"](otherVariable)) return variable

        const defValue = await this["resolveCode"](ctx, defaultValue)
        if (!this["isValidReturnType"](defValue)) return variable

        const arr = ctx.getEnvironmentKey([ name.value as string ])
        const varName = variable.value as string
        const otherVarName = otherVariable.value as string

        ctx.setEnvironmentKey(varName, defValue.value)

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length;i < len;i++) {
                const el = arr[i]
                
                ctx.setEnvironmentKey(otherVarName, el)
                
                const rt = await this["resolveCode"](ctx, code) as Return
                
                if (rt.return) {
                    ctx.setEnvironmentKey(varName, rt.value)
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }


        return Return.success(ctx.getEnvironmentKey([ varName ]))
    },
})