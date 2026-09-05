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
    name: "$addDefaultRoleOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultRoles",
        "$addDefaultRoleOptions"
    ],
    description: "Adds default role options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "role IDs",
            description: "The role ids",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [ids]) {
        const menu = (0, components_1.getLastComponent)(ctx);
        if (menu instanceof discord_js_1.RoleSelectMenuBuilder || menu instanceof discord_js_1.MentionableSelectMenuBuilder) {
            menu.addDefaultRoles(ids);
        }
        return this.success();
    },
});
//# sourceMappingURL=addDefaultRoleOption.js.map