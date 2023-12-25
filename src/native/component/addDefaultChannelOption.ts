import { BaseSelectMenuBuilder, ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultChannelOption",
    category: "component",
    version: "1.4.0",
    description: "Adds a default channel option to the last select menu",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof ChannelSelectMenuBuilder)
            menu.addDefaultChannels(id)

        return this.success()
    },
})