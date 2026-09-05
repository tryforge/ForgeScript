"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$editRoleSelectMenu",
    version: "2.2.0",
    description: "Edits a role select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "old custom ID",
            description: "The custom id of the menu to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "new custom ID",
            description: "The new custom id to use for this menu",
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
        {
            name: "default roles",
            rest: true,
            type: structures_1.ArgType.String,
            description: "The default selected roles of the menu"
        }
    ],
    execute(ctx, [old, id, placeholder, disabled, min, max, roles]) {
        for (let i = 0, len = ctx.container.components.length; i < len; i++) {
            const comp = ctx.container.components[i];
            const comps = comp instanceof discord_js_1.ContainerBuilder
                ? comp.components.map((x) => (0, components_1.buildComponent)(x.toJSON()))
                : ("components" in comp ? comp.components : undefined);
            if (!comps)
                continue;
            for (let n = 0, len = comps.length; n < len; n++) {
                const row = comps[n];
                const menu = row instanceof discord_js_1.ActionRowBuilder ? row.components[0] : row;
                if (menu instanceof discord_js_1.RoleSelectMenuBuilder && menu.data.custom_id === old) {
                    menu.setCustomId(id);
                    if (placeholder)
                        menu.setPlaceholder(placeholder);
                    if (typeof disabled === "boolean")
                        menu.setDisabled(disabled);
                    if (typeof min === "number")
                        menu.setMinValues(min);
                    if (typeof max === "number")
                        menu.setMaxValues(max);
                    if (roles.length)
                        menu.setDefaultRoles(roles.filter(Boolean));
                    if (comp instanceof discord_js_1.ContainerBuilder)
                        comp.spliceComponents(n, 1, new discord_js_1.ActionRowBuilder().addComponents(menu));
                    return this.success();
                }
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=editRoleSelectMenu.js.map