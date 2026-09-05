/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, TextChannel, ThreadAutoArchiveDuration } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setChannelArchiveDuration",
    version: "1.5.0",
    description: "Modifies a channel's archive duration",
    unwrap: true,
    output: ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "channel ID",
            type: ArgType.Channel,
            check: (i: BaseChannel) => "setDefaultAutoArchiveDuration" in i,
            description: "The channel to modify",
            rest: false,
            required: true
        },
        {
            name: "duration",
            description: "The new duration of archive",
            type: ArgType.Enum,
            enum: ThreadAutoArchiveDuration,
            rest: false,
            required: true
        },
        {
            name: "reason",
            description: "The reason for modifying archive duration",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ ch, dur, reason ]) {
        return this.success(!!((ch as TextChannel).setDefaultAutoArchiveDuration(dur, reason || ctx.reason)))
    },
})