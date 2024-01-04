import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayReduce",
    version: "1.0.0",
    description: "Reduces an array of elements and returns the result",
    unwrap: false,
    output: ArgType.Number,
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
            name: "other variable",
            description: "The other variable to load the second element to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The code to execute for every element, must return a number",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "default value",
            description: "The default value, defaults to 0",
            rest: false,
            type: ArgType.Number,
        },
    ],
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 2, 4)
        if (!this["isValidReturnType"](rt)) return rt

        const code = this.data.fields![3] as IExtendedCompiledFunctionField

        const [name, variable, otherVariable, defaultValue] = args

        const arr = ctx.getEnvironmentKey(name)

        ctx.setEnvironmentKey(variable, defaultValue)

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i]

                ctx.setEnvironmentKey(otherVariable, el)

                const rt = (await this["resolveCode"](ctx, code)) as Return

                if (rt.return) {
                    ctx.setEnvironmentKey(variable, rt.value)
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return this.success(ctx.getEnvironmentKey(variable))
    },
})
