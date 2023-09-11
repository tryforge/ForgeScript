import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$author",
    version: "1.0.0",
    description: "Adds an embed author",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "Adds a name to the embed author",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "icon",
            description: "The icon url",
            rest: false,
            type: ArgType.String
        },
        {
            name: "hyperlink",
            description: "The hyperlink url",
            rest: false,
            type: ArgType.String
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ name, icon, hyperlink, index ]) {
        ctx.container.embed((index ?? 0)).setAuthor({
            name,
            iconURL: icon ?? undefined,
            url: hyperlink ?? undefined
        })

        return Return.success()
    },
})