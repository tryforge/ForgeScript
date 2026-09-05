/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$modifyPostTags",
    version: "1.5.0",
    aliases: ["$editPostTags"],
    description: "Modifies tags of a forum post, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
            description: "The post to edit tags on",
        },
        {
            name: "reason",
            description: "The reason for modifying post tags",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: ArgType.String,
        }
    ],
    brackets: true,
    async execute(ctx, [ channel, reason, tags ]) {
        const post = channel as ThreadChannel
        return this.success(!!(await post.setAppliedTags([...new Set(post.appliedTags.filter(tag => !tags.includes(tag)).concat(tags.filter(tag => !post.appliedTags.includes(tag))))], reason || ctx.reason).catch(ctx.noop)))
    },
})