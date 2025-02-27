import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelJoinable",
    version: "1.4.0",
    description: "Returns whether the voice channel is joinable by the bot",
    unwrap: true,
    output: ArgType.Boolean,
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
        return this.success(chan && "joinable" in chan ? chan.joinable : false)
    },
})
