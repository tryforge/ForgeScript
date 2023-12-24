import { ButtonBuilder, ButtonStyle } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addButton",
    category: "unknown",
    version: "1.0.0",
    description: "Adds a button component to the newest row",
    unwrap: true,
    brackets: true,
    args: [
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
    execute(ctx, [id, label, style, emoji, disabled]) {
        const btn = new ButtonBuilder()
            .setDisabled(disabled || false)
            .setStyle(style)
            .setLabel(label)

        if (style === ButtonStyle.Link) btn.setURL(id)
        else btn.setCustomId(id)

        if (emoji) btn.setEmoji(emoji)

        ctx.container.components.at(-1)?.addComponents(btn)
        return this.success()
    },
})
