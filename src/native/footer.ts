import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$footer",
    version: "1.0.0",
    description: "Adds an embed footer",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text for the embed footer",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "url",
            description: "The url for the embed footer",
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
    execute(ctx, [ text, iconURL, index ]) {
        ctx.container.embed((index ?? 0)).setFooter({
            text,
            iconURL: iconURL ?? undefined
        })
        return Return.success()
    },
})