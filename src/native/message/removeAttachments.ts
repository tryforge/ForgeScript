/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$removeAttachments",
    version: "2.7.0",
    description: "Removes all attachments from a message, returns bool",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove attachments from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.removeAttachments().catch(ctx.noop)))
    },
})
