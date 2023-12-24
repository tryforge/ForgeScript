import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelFull",
    category: "unknown",
    version: "1.4.0",
    description: "Returns whether the voice channel is full",
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
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.success("full" in chan ? chan.full : false)
    },
})
