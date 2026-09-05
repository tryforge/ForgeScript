/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, GuildChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$cloneChannel",
    version: "1.4.0",
    description: "Clones the given channel",
    brackets: true,
    output: ArgType.Channel,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clone",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "clone" in i
        },
        {
            name: "name",
            description: "The name for the cloned channel",
            type: ArgType.String,
            rest: false,
        }
    ],
    async execute(ctx, [ raw, name ]) {
        const channel = await (<GuildChannel>raw).clone({
            name: name || (raw as GuildChannel).name,
            reason: ctx.reason
        }).catch(ctx.noop)

        return this.success(channel?.id)
    },
})