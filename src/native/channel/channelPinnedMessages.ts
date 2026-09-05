/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelPinnedMessages",
    version: "1.5.0",
    description: "Returns the pinned messages of a channel",
    brackets: false,
    aliases: [
        "$pinnedMessages"
    ],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull pinned messages from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "separator",
            description: "The separator to use for each message id",
            rest: false,
            type: ArgType.String
        },
    ],
    output: array<ArgType.Message>(),
    async execute(ctx, [ channel, sep ]) {
        channel ??= ctx.channel!
        const pins = await (channel as TextBasedChannel)?.messages.fetchPins().catch(ctx.noop)
        return this.success(pins ? pins.items.map(pin => pin.message.id).join(sep ?? ", ") : null)
    },
})