import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelTopic",
    version: "1.0.0",
    description: "Returns the channel topic",
    unwrap: true,
    output: ArgType.String,
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
        return this.success("topic" in chan ? chan.topic : undefined)
    },
})
