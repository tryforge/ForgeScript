"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$clearChannelPerms",
    version: "1.0.3",
    description: "Deletes all permission overwrites from the channel or given id, returns bool",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to delete perms from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to delete all perms for",
            rest: false,
            required: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [ch, id]) {
        const perms = ch.permissionOverwrites;
        if (id) {
            return this.success(!!(await perms.delete(id, ctx.reason).catch(ctx.noop)));
        }
        else {
            return this.success(!!(await perms.set([], ctx.reason).catch(ctx.noop)));
        }
    },
});
//# sourceMappingURL=clearChannelPerms.js.map