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
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$rolePerms",
    version: "1.0.0",
    description: "Returns the role perms",
    brackets: false,
    unwrap: true,
    output: (0, array_1.default)(discord_js_1.PermissionFlagsBits),
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to return its perms",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: structures_1.ArgType.String,
            required: false,
            rest: false,
        },
        {
            name: "return int",
            description: "Whether to return the perms as bitfield int",
            type: structures_1.ArgType.Boolean,
            rest: false,
        },
    ],
    execute(ctx, [, role, sep, int]) {
        const perms = (role ?? ctx.role)?.permissions;
        return this.success(int ? perms?.bitfield : perms?.toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=rolePerms.js.map