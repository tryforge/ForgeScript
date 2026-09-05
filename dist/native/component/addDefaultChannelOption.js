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
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultChannels",
        "$addDefaultChannelOptions"
    ],
    description: "Adds default channel options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel IDs",
            description: "The channel ids",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [ids]) {
        const menu = (0, components_1.getLastComponent)(ctx);
        if (menu instanceof discord_js_1.ChannelSelectMenuBuilder) {
            menu.addDefaultChannels(ids);
        }
        return this.success();
    },
});
//# sourceMappingURL=addDefaultChannelOption.js.map