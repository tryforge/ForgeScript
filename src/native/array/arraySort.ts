import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arraySort",
    version: "1.2.0",
    description: "Sorts given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Json,
    execute(ctx, [variable, other]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        if (arr !== null) {
            if (other)
                ctx.setEnvironmentKey(other, arr.sort())
            else
                return this.successJSON(arr.sort())
        }
        
        return this.success()
    },
})
