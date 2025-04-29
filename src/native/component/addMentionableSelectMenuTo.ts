import { ActionRow, ActionRowBuilder, MentionableSelectMenuBuilder, MessageActionRowComponent, RoleSelectMenuBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addMentionableSelectMenuTo",
    version: "1.5.0",
    description: "Creates a mentionable select menu to a message",
    brackets: true,
    output: ArgType.Boolean,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to add row to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
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
            required: false,
            type: ArgType.Boolean
        }
    ],
    async execute(ctx, [ , m, id, placeholder, min, max, disabled ]) {
        const menu = new MentionableSelectMenuBuilder()
            .setDisabled(disabled ?? false)
            .setCustomId(id)
            
        if (placeholder)
            menu.setPlaceholder(placeholder)
        if (min)
            menu.setMinValues(min)
        if (max)
            menu.setMaxValues(max)

        const components = m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))
        components.at(-1)?.addComponents(menu)
        
        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<MentionableSelectMenuBuilder>[] }).catch(ctx.noop))
        )
    }
})