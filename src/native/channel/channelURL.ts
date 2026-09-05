/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelURL",
    version: "2.4.0",
    description: "Returns the url of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
    ],
    output: ArgType.URL,
    execute(ctx, [channel]) {
        return this.success((channel ?? ctx.channel)?.url)
    },
})