/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Message } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$sendDM",
    version: "1.0.0",
    description: "Sends a DM to the user",
    unwrap: true,
    brackets: true,
    output: ArgType.Message,
    args: [
        {
            name: "user ID",
            description: "The user to direct message",
            rest: false,
            type: ArgType.User,
            required: true,
        },
        {
            name: "content",
            description: "The content to send",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "return message ID",
            description: "Whether to return the id of the newly created message",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [user, content, returnMessageID]) {
        ctx.container.content = content || undefined
        const msg = await ctx.container.send<Message<true>>(user)
        return this.success(returnMessageID ? msg?.id : undefined)
    },
})
