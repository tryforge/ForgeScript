"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setDefaultSortOrder",
    version: "2.2.0",
    description: "Sets a forum's default sort order of posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly()
        },
        {
            name: "layout",
            description: "The new default sort order, leave empty to reset",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.SortOrderType
        },
        {
            name: "reason",
            description: "The reason for modifying default sort order",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [chan, sortOrder, reason]) {
        return this.success(!!(await chan.setDefaultSortOrder(sortOrder || null, reason || ctx.reason).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setDefaultSortOrder.js.map