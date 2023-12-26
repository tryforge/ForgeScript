import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelCreatedAt",
    category: "channel",
    version: "1.0.0",
    description: "Returns the channel timestamp",
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
        return this.success(chan.createdTimestamp)
    },
})