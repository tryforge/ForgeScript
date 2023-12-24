import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelUserLimit",
    version: "1.4.0",
    description: "Returns the user limit of the voice channel",
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
        return this.success("userLimit" in chan ? chan.userLimit : 0)
    },
})
