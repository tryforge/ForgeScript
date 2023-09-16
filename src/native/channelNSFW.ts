import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelNSFW",
    version: "1.0.0",
    description: "Returns whether the channel is nsfw",
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
        return Return.success("nsfw" in chan ? chan.nsfw : false)
    },
})
