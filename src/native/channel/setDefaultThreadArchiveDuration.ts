/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadAutoArchiveDuration, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setDefaultThreadArchiveDuration",
    version: "1.5.0",
    description: "Sets a forum's default auto archive duration of posts",
    unwrap: true,
    output: ArgType.Boolean,
    aliases: [
        "$setDefaultThreadAutoArchiveDuration"
    ],
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            rest: false,
            required: true
        },
        {
            name: "duration",
            description: "The new duration of auto archive",
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
        return this.success(!!(await (ch as ThreadOnlyChannel).setDefaultAutoArchiveDuration(dur, reason || ctx.reason).catch(ctx.noop)))
    },
})