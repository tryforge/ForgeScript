import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$color",
    description: "Adds an embed color",
    unwrap: true,
    args: [
        {
            name: "color",
            description: "The color for the embed",
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
    execute(ctx, [ color, index ]) {
        ctx.container.embed((index ?? 1) - 1).setColor(color as ColorResolvable)
        return Return.success()
    },
})