/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadManager } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelThreadIDs",
    version: "2.5.0",
    description: "Returns the thread ids of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its threads",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => "threads" in i
        },
        {
            name: "separator",
            description: "The separator to use for every thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array<ArgType.Channel>(),
    execute(ctx, [channel, sep]) {
        const chan = channel ?? ctx.channel
        return this.success("threads" in chan ? (chan.threads as ThreadManager).cache.map((x) => x.id).join(sep ?? ", ") : null)
    },
})