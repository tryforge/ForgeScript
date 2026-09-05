"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addChannelPerms",
    version: "1.0.3",
    description: "Adds permission overwrites to a channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to add perms to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to add these perms to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "perms",
            description: "The perms to add to the id",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
            enum: discord_js_1.PermissionFlagsBits,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [ch, id, perms]) {
        const channel = ch;
        const obj = {};
        perms.forEach((x) => (obj[x] = true));
        return this.success(!!(await channel.permissionOverwrites.create(id, obj, { reason: ctx.reason })));
    },
});
//# sourceMappingURL=addChannelPerms.js.map