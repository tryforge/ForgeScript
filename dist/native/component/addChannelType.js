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
    name: "$addChannelType",
    version: "1.4.0",
    aliases: ["$addChannelTypes"],
    description: "Adds channel types to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to add",
            rest: true,
            enum: discord_js_1.ChannelType,
            required: true,
            type: structures_1.ArgType.Enum
        }
    ],
    execute(ctx, [types]) {
        const menu = (0, components_1.getLastComponent)(ctx);
        if (menu instanceof discord_js_1.ChannelSelectMenuBuilder) {
            menu.addChannelTypes(types);
        }
        return this.success();
    },
});
//# sourceMappingURL=addChannelType.js.map