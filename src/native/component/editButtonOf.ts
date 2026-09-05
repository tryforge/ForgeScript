/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { resolveNumericEnum } from "../../functions/enum"

export default new NativeFunction({
    name: "$editButtonOf",
    version: "1.5.0",
    description: "Edits a button component of a message",
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
            description: "The message to edit button for",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
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
            description: "The new button label",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "style",
            description: "The new style for this button",
            enum: ButtonStyle,
            type: ArgType.Enum,
            rest: false,
        },
        {
            name: "emoji",
            rest: false,
            type: ArgType.String,
            description: "The new emoji for this button",
        },
        {
            name: "disabled",
            rest: false,
            type: ArgType.Boolean,
            description: "Whether to disable the button",
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, oldId, id, label, style, emoji, disabled]) {
        const components = m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))

        const rowIndex = components.findIndex((x) =>
            x.components.some((x) => "custom_id" in x.data && x.data.custom_id === oldId)
        )
        if (rowIndex === -1) return this.success()

        const btn = components[rowIndex].components.find(
            (x) => "custom_id" in x.data && x.data.custom_id === oldId
        ) as ButtonBuilder

        if (!btn) return this.success()
        style = (style ? resolveNumericEnum(ButtonStyle, style) : btn.data.style)

        if (label) btn.setLabel(label)
        if (style) btn.setStyle(style)
        if (emoji) btn.setEmoji(emoji)
        if (typeof disabled === "boolean") btn.setDisabled(disabled)

        if (style === ButtonStyle.Link) btn.setURL(id)
        else if (style === ButtonStyle.Premium) btn.setSKUId(id)
        else btn.setCustomId(id)

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop))
        )
    },
})
