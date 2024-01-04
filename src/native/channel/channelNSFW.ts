import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelNSFW",
    version: "1.0.0",
    description: "Returns whether the channel is nsfw",
    unwrap: true,
    brackets: false,
    output: ArgType.Boolean,
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
        return this.success("nsfw" in chan ? chan.nsfw : false)
    },
})
