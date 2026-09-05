"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$guildSystemChannelFlags",
    version: "2.7.0",
    description: "Returns the system channel flags of a guild",
    aliases: [
        "$serverSystemChannelFlags"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            type: structures_1.ArgType.Guild,
            required: true,
            rest: false,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    output: (0, array_1.default)(discord_js_1.GuildSystemChannelFlags),
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.systemChannelFlags.toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildSystemChannelFlags.js.map