import { BaseChannel, ChannelType, PartialGroupDMChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forward",
    version: "2.2.0",
    description: "Forwards a message to another channel, returns bool",
    aliases: ["$forwardMessage"],
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
    output: ArgType.Boolean,
    async execute(ctx, [, message, channel]) {
        return this.success(!!(await message.forward((channel ?? ctx.channel) as Exclude<TextBasedChannel, PartialGroupDMChannel>).catch(ctx.noop)))
    },
})