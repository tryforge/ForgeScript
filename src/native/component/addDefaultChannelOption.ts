import { ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultChannels",
        "$addDefaultChannelOptions"
    ],
    description: "Adds default channel options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel IDs",
            description: "The channel ids",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ids ]) {
        const menu = ctx.container.actionRow?.components[0]
        if (menu instanceof ChannelSelectMenuBuilder) {
            menu.addDefaultChannels(ids)
        }
        return this.success()
    },
})