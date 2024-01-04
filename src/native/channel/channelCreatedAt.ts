import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelCreatedAt",
    version: "1.0.0",
    description: "Returns the channel timestamp",
    unwrap: true,
    brackets: false,
    output: ArgType.Number,
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
        return this.success(chan.createdTimestamp)
    },
})
