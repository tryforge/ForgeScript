import { ButtonBuilder, ButtonStyle } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$editButton",
    version: "1.0.7",
    description: "Edit a button component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to find the component",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "new custom ID",
            description: "The new custom id for this component",
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
    execute(ctx, [oldId, id, label, style, emoji, disabled]) {
        const rowIndex = ctx.container.components.findIndex((x) =>
            x.components.some((x) => "custom_id" in x.data && x.data.custom_id === oldId)
        )
        if (rowIndex === -1) return Return.success(false)

        const btn = ctx.container.components[rowIndex].components.find(
            (x) => "custom_id" in x.data && x.data.custom_id === oldId
        ) as ButtonBuilder

        if (!btn) return Return.success(false)

        btn.setCustomId(id)
            .setDisabled(disabled || false)
            .setStyle(style)
            .setLabel(label)

        if (style === ButtonStyle.Link) btn.setURL(id)
        else btn.setCustomId(id)

        if (emoji) btn.setEmoji(emoji)

        return Return.success(true)
    },
})
