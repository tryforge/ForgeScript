/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$removeThreadMember",
    version: "1.0.0",
    description: "Removes a member from a thread, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "channel ID",
            description: "The thread to remove member from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to remove",
            rest: false,
            required: true,
            type: ArgType.Member,
        },
    ],
    async execute(ctx, [, channel, member]) {
        const thread = channel as ThreadChannel
        const success = await thread.members.remove(member.id).catch(ctx.noop)

        return this.success(!!success)
    },
})
