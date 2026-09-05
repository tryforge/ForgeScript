/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, SortOrderType, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly()
        },
        {
            name: "layout",
            description: "The new default sort order, leave empty to reset",
            rest: false,
            type: ArgType.Enum,
            enum: SortOrderType
        },
        {
            name: "reason",
            description: "The reason for modifying default sort order",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan, sortOrder, reason ]) {
        return this.success(!!(await (chan as ThreadOnlyChannel).setDefaultSortOrder(sortOrder || null, reason || ctx.reason).catch(ctx.noop)))
    },
})