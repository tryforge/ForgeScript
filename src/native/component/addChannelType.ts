import { ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addChannelType",
    version: "1.4.0",
    aliases: ["$addChannelTypes"],
    description: "Adds channel types to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to add",
            rest: true,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ types ]) {
        const menu = ctx.container.components.at(-1)?.components.at(0)
        if (menu instanceof ChannelSelectMenuBuilder) {
            menu.addChannelTypes(types)
        }

        return this.success()
    },
})