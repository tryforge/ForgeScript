import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$thumbnail",
    version: "1.0.0",
    description: "Adds an embed thumbnail",
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The url for the embed thumbnail",
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
    execute(ctx, [ thumbnail, index ]) {
        ctx.container.embed((index ?? 0)).setThumbnail(thumbnail)
        return Return.success()
    },
})