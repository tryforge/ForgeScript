/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, VoiceBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setScheduledEventChannel",
    version: "2.6.0",
    description: "Sets a channel for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The voice channel of the scheduled event",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
    ],
    execute(ctx, [channel]) {
        ctx.scheduledEvent.channel = channel as VoiceBasedChannel
        return this.success()
    },
})