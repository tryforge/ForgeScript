import { BaseSelectMenuBuilder, ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addChannelType",
    version: "1.4ºº.0",
    description: "Adds a channel type to the last select menu",
    unwrap: true,
    args: [
        {
            name: "type",
            description: "The channel type",
            rest: false,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ type ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof ChannelSelectMenuBuilder)
            menu.addChannelTypes(type)

        return this.success()
    },
})