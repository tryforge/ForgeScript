/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setChannelTopic",
    version: "1.0.0",
    description: "Sets a channel topic, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to set its topic",
            rest: false,
            check: (i: BaseChannel) => "setTopic" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "topic",
            description: "The topic to set",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, topic]) {
        return this.success(!!(await (channel as TextChannel).setTopic(topic || null, ctx.reason).catch(ctx.noop)))
    },
})
