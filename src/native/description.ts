import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$description",
    version: "1.0.0",
    description: "Adds an embed description",
    unwrap: true,
    args: [
        {
            name: "description",
            description: "The description for the embed",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ description, index ]) {
        ctx.container.embed((index ?? 0)).setDescription(description)
        return Return.success()
    },
})