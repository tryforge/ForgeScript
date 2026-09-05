"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildRoleIDs",
    version: "1.3.0",
    description: "Returns every role id of the guild",
    aliases: [
        "$serverRoleIDs",
        "$roleIDs"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get role ids from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "separator",
            description: "The separator to use for every role",
            rest: false,
            type: structures_1.ArgType.String
        },
        {
            name: "everyone",
            description: "Whether to include the @everyone role, defaults to true",
            rest: false,
            type: structures_1.ArgType.Boolean
        }
    ],
    output: (0, array_1.default)(),
    execute(ctx, [guild, sep, everyone]) {
        return this.success((guild ?? ctx.guild)?.roles.cache
            .filter((x) => everyone !== false || x.guild.id !== x.id)
            .map((x) => x.id)
            .join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildRoleIDs.js.map