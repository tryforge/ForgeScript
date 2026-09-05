"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const enum_1 = require("../../functions/enum");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to edit button for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id to find the component",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "new custom ID",
            description: "The new custom id for this component",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "label",
            description: "The new button label",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "style",
            description: "The new style for this button",
            enum: discord_js_1.ButtonStyle,
            type: structures_1.ArgType.Enum,
            rest: false,
        },
        {
            name: "emoji",
            rest: false,
            type: structures_1.ArgType.String,
            description: "The new emoji for this button",
        },
        {
            name: "disabled",
            rest: false,
            type: structures_1.ArgType.Boolean,
            description: "Whether to disable the button",
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, m, oldId, id, label, style, emoji, disabled]) {
        const components = m.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        const rowIndex = components.findIndex((x) => x.components.some((x) => "custom_id" in x.data && x.data.custom_id === oldId));
        if (rowIndex === -1)
            return this.success();
        const btn = components[rowIndex].components.find((x) => "custom_id" in x.data && x.data.custom_id === oldId);
        if (!btn)
            return this.success();
        style = (style ? (0, enum_1.resolveNumericEnum)(discord_js_1.ButtonStyle, style) : btn.data.style);
        if (label)
            btn.setLabel(label);
        if (style)
            btn.setStyle(style);
        if (emoji)
            btn.setEmoji(emoji);
        if (typeof disabled === "boolean")
            btn.setDisabled(disabled);
        if (style === discord_js_1.ButtonStyle.Link)
            btn.setURL(id);
        else if (style === discord_js_1.ButtonStyle.Premium)
            btn.setSKUId(id);
        else
            btn.setCustomId(id);
        return this.success(!!(await m.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editButtonOf.js.map