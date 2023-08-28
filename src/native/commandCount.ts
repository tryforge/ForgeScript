import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandCount",
    description: "Returns the command count",
    brackets: false,
    args: [
        {
            name: "categories",
            rest: true,
            required: true,
            description: "The event types to filter by",
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ categories ]) {
        return Return.success(
            this.hasFields ?
                ctx.client.commands["commands"].filter((x, key) => categories.includes(key)).reduce((x, y) => x + y.length, 0) :
                ctx.client.commands["commands"].reduce((x, y) => x + y.length, 0)
        )
    },
})