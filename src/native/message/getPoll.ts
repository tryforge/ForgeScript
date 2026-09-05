/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { PollProperties, PollProperty } from "../../properties/poll"

export default new NativeFunction({
    name: "$getPoll",
    version: "2.5.0",
    description: "Retrieves data of a poll from a message",
    aliases: ["$getMessagePoll"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: PollProperty,
            required: true,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [, msg, prop]) {
        const poll = (msg ?? ctx.message)?.poll
        return this.success(poll ? PollProperties[prop](poll) : null)
    },
})