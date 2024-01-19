import { ColorResolvable, Colors } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

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
            type: ArgType.Color,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [color, index]) {
        ctx.container.embed(index ?? 0).setColor(color || null)
        return this.success()
    },
})
