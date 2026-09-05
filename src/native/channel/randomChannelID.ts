/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "types",
            description: "The channel types to get an id from",
            type: ArgType.Enum,
            rest: true,
            required: true,
            enum: ChannelType
        }
    ],
    output: ArgType.Channel,
    execute(ctx, [types]) {
        types ??= []

        return this.success(
            types.length === 0 ? ctx.client.channels.cache.randomKey() :
                ctx.client.channels.cache.filter(x => types.includes(x.type)).randomKey()
        )
    },
})
