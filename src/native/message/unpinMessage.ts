/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$unpinMessage",
    version: "1.1.0",
    output: ArgType.Boolean,
    description: "Unpins a message from a channel, returns bool",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to unpin",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message
        }
    ],
    async execute(ctx, [, m ]) {
        return this.success(!!(await (m ?? ctx.message)?.unpin(ctx.reason).catch(ctx.noop)))
    },
})