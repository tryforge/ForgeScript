/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isThreadOnly",
    version: "2.8.0",
    description: "Returns whether the channel is a thread only channel",
    aliases: ["$channelIsThreadOnly"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [channel]) {
        return this.success(!!(channel ?? ctx.channel)?.isThreadOnly())
    },
})
