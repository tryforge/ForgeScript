/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$getThreadMembers",
    version: "1.0.0",
    description: "Returns all members from a thread",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to pull members from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "separator",
            description: "The separator for every id",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array<ArgType.Member>(),
    async execute(ctx, [channel, sep]) {
        const thread = channel as ThreadChannel

        const success = await thread.members.fetch().catch(ctx.noop)

        return this.success(success && success.size ? success.map((x) => x.id).join(sep || ", ") : undefined)
    },
})
