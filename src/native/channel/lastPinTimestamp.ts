import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$lastPinTimestamp",
    version: "1.5.0",
    aliases: [
        "$channelLastPinTimestamp"
    ],
    unwrap: true,
    brackets: false,
    output: ArgType.Number,
    description: "Returns the latest pin timestamp of a channel",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull last pin from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "lastPinTimestamp" in i
        },
    ],
    async execute(ctx, [ch]) {
        ch ??= ctx.channel!
        return this.success((ch as TextChannel).lastPinTimestamp)
    },
})