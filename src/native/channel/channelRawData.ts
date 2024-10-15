import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelRawData",
    version: "1.5.0",
    description: "Returns the raw data of a channel",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get raw data from",
            type: ArgType.Channel,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [channel]) {
        return this.successJSON((channel ?? ctx.channel)?.toJSON())
    },
})