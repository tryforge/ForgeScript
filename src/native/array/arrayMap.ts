import parseJSON from "../../functions/parseJSON"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayMap",
    version: "1.0.0",
    description: "Maps through every element of the array and loads the results to another array",
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
        {
            name: "other variable",
            description: "The other variable to load the result to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const [nameField, varField, code, otherVarField] = this.data.fields! as IExtendedCompiledFunctionField[]

        const name = await this["resolveCode"](ctx, nameField)
        if (!this["isValidReturnType"](name)) return name

        const variable = await this["resolveCode"](ctx, varField)
        if (!this["isValidReturnType"](variable)) return variable

        const otherVariable = await this["resolveCode"](ctx, otherVarField)
        if (!this["isValidReturnType"](otherVariable)) return variable

        const arr = ctx.getEnvironmentKey(name.value as string)
        const varName = variable.value as string
        const otherVarName = otherVariable.value as string

        const newArr = new Array<unknown>()

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(varName, el)
                const rt = (await this["resolveCode"](ctx, code)) as Return

                if (rt.return) {
                    newArr.push(parseJSON(rt.value))
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        ctx.setEnvironmentKey(otherVarName, newArr)

        return this.success()
    },
})
