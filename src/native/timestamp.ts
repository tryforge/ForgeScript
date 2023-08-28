import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$timestamp",
    description: "Adds an embed timestamp",
    unwrap: true,
    args: [
        {
            name: "ms",
            description: "The timestamp time to add",
            type: ArgType.Number,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: false,
    execute(ctx, [ timestamp, index ]) {
        if (!this.hasFields) {
            ctx.container.embed(0).setTimestamp()
            return Return.success()
        }

        ctx.container.embed((index ?? 1) - 1).setTimestamp(timestamp ?? Date.now())
        return Return.success()
    },
})