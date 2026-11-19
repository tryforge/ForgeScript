/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ChannelType, PartialGroupDMChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$forwardMessage",
    version: "2.2.0",
    description: "Forwards a message to another channel, returns bool",
    aliases: ["$forward"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message to forward",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "channel ID",
            description: "The channel to forward message to",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && i.type !== ChannelType.GroupDM,
        },
    ],
    output: ArgType.Message,
    async execute(ctx, [, message, channel]) {
        const chan = (channel ?? ctx.channel) as Exclude<TextBasedChannel, PartialGroupDMChannel>
        const msg = await message.forward(chan).catch(ctx.noop)
        return this.success(msg ? msg.id : null)
    },
})