import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchMessage",
    version: "2.2.0",
    description: "Fetches all data of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    async execute(ctx, [, message]) {
        await (message ?? ctx.message)?.fetch()
        return this.success()
    },
})