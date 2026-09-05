/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteForumTags",
    version: "2.5.0",
    description: "Deletes tags from a forum, returns bool",
    aliases: ["$deleteForumTag"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to delete tags from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
        },
        {
            name: "tags",
            description: "The tags to delete",
            rest: true,
            required: true,
            type: ArgType.ForumTag,
            pointer: 0
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ channel, tags ]) {
        const forum = channel as ThreadOnlyChannel
        const newTags = forum.availableTags.filter((x) => !tags.some((tag) => x.id === tag.id))
        return this.success(!!(await forum.setAvailableTags(newTags).catch(ctx.noop)))
    },
})