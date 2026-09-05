/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$startTyping",
    version: "1.0.0",
    description: "Starts typing in a channel",
    unwrap: true,
    aliases: [
        "$channelStartTyping"
    ],
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to start typing at",
            required: true,
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
    ],
    async execute(ctx, [ch]) {
        const channel = (ch ?? ctx.channel) as TextChannel
        if (channel?.isTextBased()) await channel.sendTyping().catch(() => null)
        return this.success()
    },
})
