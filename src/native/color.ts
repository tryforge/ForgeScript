import { ColorResolvable, Colors } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$color",
    version: "1.0.0",
    description: "Adds an embed color",
    unwrap: true,
    args: [
        {
            name: "color",
            description: "The color for the embed",
            required: true,
            enum: Colors,
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
        const col = (!isNaN(Number(color)) ? Number(color) : color.startsWith("#") ? color.slice(1) : color) as ColorResolvable
        ctx.container.embed((index ?? 0)).setColor(col)
        return Return.success()
    },
})