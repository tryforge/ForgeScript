import { ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addChannelSelectMenu",
    version: "1.4.0",
    description: "Creates a channel select menu",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            type: ArgType.Boolean
        },
        {
            name: "default channels",
            rest: true,
            type: ArgType.String,
            description: "The default selected channels to use"
        }
    ],
    execute(ctx, [ id, placeholder, min, max, disabled, channels ]) {
        const menu = new ChannelSelectMenuBuilder()
            .setDefaultChannels(channels)
            .setDisabled(disabled ?? false)
            .setCustomId(id)
            
        if (placeholder)
            menu.setPlaceholder(placeholder)
        if (min)
            menu.setMinValues(min)
        if (max)
            menu.setMaxValues(max)

        ctx.container.actionRow?.addComponents(menu)
        return this.success()
    }
})