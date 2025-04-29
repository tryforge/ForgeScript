import { ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addButtonTo",
    version: "1.5.0",
    description: "Adds a button component to the newest row in a message",
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
            description: "The message to add button to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id for this component",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "label",
            description: "The button label",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "style",
            description: "The style for this button",
            enum: ButtonStyle,
            type: ArgType.Enum,
            required: true,
            rest: false,
        },
        {
            name: "emoji",
            rest: false,
            type: ArgType.String,
            description: "The emoji for this button",
        },
        {
            name: "disabled",
            rest: false,
            type: ArgType.Boolean,
            description: "Whether to disable the button",
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, id, label, style, emoji, disabled]) {
        const btn = new ButtonBuilder()
            .setDisabled(disabled || false)
            .setStyle(style)

        if (style === ButtonStyle.Link) btn.setURL(id)
        else if (style === ButtonStyle.Premium) btn.setSKUId(id)
        else btn.setCustomId(id)

        if (style !== ButtonStyle.Premium) {
            btn.setLabel(label)
            if (emoji) btn.setEmoji(emoji)
        }

        const components = m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))
        components.at(-1)?.addComponents(btn)

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop))
        )
    },
})
