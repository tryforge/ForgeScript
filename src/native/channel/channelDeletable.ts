/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelDeletable",
    version: "2.4.0",
    description: "Returns whether the channel is deletable",
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
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.success(chan && "deletable" in chan ? chan.deletable : false)
    },
})
