import { ActionRow, ActionRowBuilder, MessageActionRowComponent, StringSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addStringSelectMenuTo",
    version: "1.5.0",
    description: "Adds a string select menu to a message",
    unwrap: true,
    brackets: true,
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
            description: "The message to add select menu to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id to use for this menu",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: ArgType.Boolean,
            rest: false,
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
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, id, placeholder, disabled, min, max]) {
        const menu = new StringSelectMenuBuilder().setCustomId(id).setDisabled(disabled || false)

        if (placeholder) menu.setPlaceholder(placeholder)
        if (min !== null) menu.setMinValues(min)
        if (max !== null) menu.setMaxValues(max)

        const components = m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))
        components.at(-1)?.addComponents(menu)

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<StringSelectMenuBuilder>[] }).catch(ctx.noop))
        )
    },
})
