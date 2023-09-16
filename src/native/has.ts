import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$has",
    version: "1.0.0",
    description: "Checks whether a keyword exists",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the keyword",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [name]) {
        return Return.success(ctx.hasKeyword(name))
    },
})
