/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$hasComponents",
    version: "2.5.0",
    description: "Checks whether given message has components",
    brackets: false,
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
            description: "The message to check for components",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [, msg]) {
        return this.success(!!(msg ?? ctx.message)?.components.length)
    },
})