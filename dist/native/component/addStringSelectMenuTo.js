"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addStringSelectMenuTo",
    version: "1.5.0",
    description: "Creates a string select menu on a message",
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
            description: "The message to add select menu to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id to use for this menu",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: structures_1.ArgType.Boolean,
            rest: false,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, m, id, placeholder, disabled, min, max]) {
        const menu = new discord_js_1.StringSelectMenuBuilder().setCustomId(id).setDisabled(disabled || false);
        if (placeholder)
            menu.setPlaceholder(placeholder);
        if (min)
            menu.setMinValues(min);
        if (max)
            menu.setMaxValues(max);
        const components = m.components.map(x => (0, discord_js_1.createComponentBuilder)(x.toJSON()));
        components.push(new discord_js_1.ActionRowBuilder().addComponents(menu));
        return this.success(!!(await m.edit({ components: components.map(x => x.toJSON()) }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=addStringSelectMenuTo.js.map