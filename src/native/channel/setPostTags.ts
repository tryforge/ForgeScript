/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setPostTags",
    version: "2.5.0",
    description: "Sets tags to a forum post, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
            description: "The post to set tags on",
        },
        {
            name: "reason",
            description: "The reason for setting post tags",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            type: ArgType.String,
        }
    ],
    brackets: true,
    async execute(ctx, [ channel, reason, tags ]) {
        const post = channel as ThreadChannel
        return this.success(!!(await post.setAppliedTags(tags, reason || ctx.reason).catch(ctx.noop)))
    },
})