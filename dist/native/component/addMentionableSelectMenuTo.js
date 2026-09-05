"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addMentionableSelectMenuTo",
    version: "1.5.0",
    description: "Creates a mentionable select menu on a message",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    unwrap: true,
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
            description: "The message to add row to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: structures_1.ArgType.String,
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
        {
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "default roles/users",
            rest: true,
            type: structures_1.ArgType.RoleOrUser,
            description: "The default selected roles or users to use",
            pointer: 0,
            pointerProperty: "guild"
        }
    ],
    async execute(ctx, [, m, id, placeholder, min, max, disabled, defaults]) {
        const menu = new discord_js_1.MentionableSelectMenuBuilder()
            .setDisabled(disabled || false)
            .setCustomId(id)
            .setDefaultValues(defaults.map(x => {
            return {
                id: x.id,
                type: x instanceof discord_js_1.User ? discord_js_1.SelectMenuDefaultValueType.User : discord_js_1.SelectMenuDefaultValueType.Role
            };
        }));
        if (placeholder)
            menu.setPlaceholder(placeholder);
        if (min)
            menu.setMinValues(min);
        if (max)
            menu.setMaxValues(max);
        const components = m.components.map(x => (0, discord_js_1.createComponentBuilder)(x.toJSON()));
        components.push(new discord_js_1.ActionRowBuilder().addComponents(menu));
        return this.success(!!(await m.edit({ components: components.map(x => x.toJSON()) }).catch(ctx.noop)));
    }
});
//# sourceMappingURL=addMentionableSelectMenuTo.js.map