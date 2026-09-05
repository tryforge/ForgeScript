"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "types",
            description: "The channel types to get an id from",
            type: structures_1.ArgType.Enum,
            rest: true,
            required: true,
            enum: discord_js_1.ChannelType
        }
    ],
    output: structures_1.ArgType.Channel,
    execute(ctx, [types]) {
        types ??= [];
        return this.success(types.length === 0 ? ctx.client.channels.cache.randomKey() :
            ctx.client.channels.cache.filter(x => types.includes(x.type)).randomKey());
    },
});
//# sourceMappingURL=randomChannelID.js.map