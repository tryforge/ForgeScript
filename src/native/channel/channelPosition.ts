import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelPosition",
    version: "1.0.3",
    description: "Returns the channel position",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its position",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.success(chan && "position" in chan ? chan.position : undefined)
    },
})
