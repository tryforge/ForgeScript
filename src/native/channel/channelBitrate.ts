import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelBitrate",
    version: "1.4.0",
    description: "Returns the bitrate of the voice channel",
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
        return this.success("bitrate" in chan ? chan.bitrate : 0)
    },
})
