/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setChannelName",
    version: "1.0.0",
    description: "Sets a channel name, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to set its name",
            rest: false,
            check: (i: BaseChannel) => "setName" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "name",
            description: "The name to set",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [channel, name]) {
        return this.success(!!(await (channel as TextChannel).setName(name, ctx.reason).catch(ctx.noop)))
    },
})
