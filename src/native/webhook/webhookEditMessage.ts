/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, Message, WebhookClient } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookEditMessage",
    version: "1.5.0",
    description: "Edits a webhook message, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "message ID",
            description: "The message to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "content",
            description: "The new content for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "thread ID",
            description: "The thread this message belongs to",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
    ],
    async execute(ctx, [ url, msg, content, thread ]) {
        const web = new WebhookClient({ url })

        ctx.container.content = content || undefined
        ctx.container.threadId = thread?.id || undefined
        ctx.container.edit = true
        ctx.container.withComponents = true

        return this.success(!!(await ctx.container.send<Message>(web, undefined, msg)))
    },
})