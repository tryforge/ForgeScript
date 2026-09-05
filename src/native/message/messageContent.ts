/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$messageContent",
    version: "1.4.0",
    description: "Retrieves the content of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its content",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: ArgType.String,
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.content)
    },
})
