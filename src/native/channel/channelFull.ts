import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelFull",
    version: "1.4.0",
    description: "Returns whether the voice channel is full",
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
        return this.success("full" in chan ? chan.full : false)
    },
})
