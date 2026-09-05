/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadManager } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchThreads",
    version: "2.5.0",
    description: "Caches all threads of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to cache its threads",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => "threads" in i
        },
        {
            name: "archived",
            description: "Whether to cache archived threads, otherwise active",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "private",
            description: "Whether to cache archived private threads, otherwise public",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [channel, archived, priv]) {
        const chan = channel ?? ctx.channel

        if ("threads" in chan) {
            const threads = chan.threads as ThreadManager
            
            if (archived) await threads.fetchArchived({ type: priv ? "private" : undefined, fetchAll: true }).catch(ctx.noop)
            else await threads.fetchActive().catch(ctx.noop)
        }

        return this.success()
    },
})