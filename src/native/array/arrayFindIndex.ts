import isTrue from "../../functions/isTrue"
import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayFindIndex",
    category: "array",
    version: "1.0.0",
    description: "Finds the index of an element in the array",
    unwrap: false,
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
            condition: true,
            required: true,
            type: ArgType.String,
        },
    ],
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const [nameField, varField, code] = this.data.fields! as IExtendedCompiledFunctionField[]

        const name = await this["resolveCode"](ctx, nameField)
        if (!this["isValidReturnType"](name)) return name

        const variable = await this["resolveCode"](ctx, varField)
        if (!this["isValidReturnType"](variable)) return variable

        const arr = ctx.getEnvironmentKey(name.value as string)
        const varName = variable.value as string

        if (!Array.isArray(arr)) return this.success(-1)

        for (let i = 0, len = arr.length; i < len; i++) {
            const el = arr[i]
            ctx.setEnvironmentKey(varName, el)
            const rt = (await this["resolveCondition"](ctx, code as unknown as IExtendedCompiledFunctionConditionField)) as Return

            if (rt.return || rt.success) {
                if (!isTrue(rt)) continue
                return this.success(i)
            } else if (!this["isValidReturnType"](rt)) return rt
        }

        return this.success(-1)
    },
})
