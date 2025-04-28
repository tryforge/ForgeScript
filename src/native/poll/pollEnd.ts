import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollEnd",
    version: "1.5.0",
    description: "Ends a poll",
    aliases: [
        "$endPoll"
    ],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get the message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to get the poll",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        }
    ],
    async execute(ctx, [ , msg ]) {
        return this.success(!!(await (msg ?? ctx.message)?.poll?.end().catch(ctx.noop)))
    },
})