import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayLastIndexOf",
    version: "1.5.0",
    description: "Gets the index of a last found element in the array",
    unwrap: true,
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
            name: "value",
            description: "The exact value to get its last index",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, value]) {
        const arr = ctx.getEnvironmentKey(name)
        return this.success(Array.isArray(arr) ? arr.lastIndexOf(value) : -1)
    },
})