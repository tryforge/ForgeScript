import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageRawData",
    version: "1.5.0",
    description: "Returns the raw data of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get message from",
            type: ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message to get raw data from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [, message]) {
        return this.successJSON((message ?? ctx.message)?.toJSON())
    },
})