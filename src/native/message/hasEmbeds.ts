/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$hasEmbeds",
    version: "1.2.0",
    brackets: false,
    output: ArgType.Boolean,
    description: "Checks whether given message has embeds",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get message from",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "message ID",
            description: "The message to check for embeds",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        }
    ],
    execute(ctx, [, msg]) {
        return this.success(!!(msg ?? ctx.message)?.embeds.length)
    },
})