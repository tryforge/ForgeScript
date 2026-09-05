/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$threadIsLocked",
    version: "2.7.0",
    aliases: [
        "$isLocked",
        "$threadLocked"
    ],
    description: "Returns whether a thread is locked",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to check if its locked",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel
        return this.success(!!thread?.locked)
    },
})
