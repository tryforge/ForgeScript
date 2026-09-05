/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$threadOwnerID",
    version: "2.2.0",
    description: "Returns the owner of the thread",
    brackets: false,
    unwrap: true,
    output: ArgType.Member,
    args: [
        {
            name: "channel ID",
            description: "The thread to retrieve owner of",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel) as ThreadChannel
        return this.success(thread?.ownerId)
    },
})