/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createForumPost",
    version: "1.0.0",
    description: "Creates a forum post, returns the post channel id",
    unwrap: true,
    output: ArgType.Channel,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            description: "The channel to create a post on",
        },
        {
            name: "title",
            description: "The post title",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The post description",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, title, desc, tags]) {
        const forum = channel as ThreadOnlyChannel

        ctx.container.content = desc || undefined

        const t = await forum.threads
            .create({
                appliedTags: tags,
                name: title,
                message: ctx.container.getOptions(),
                reason: ctx.reason
            })
            .catch(ctx.noop)

        ctx.container.reset()

        return this.success(t ? t.id : undefined)
    },
})