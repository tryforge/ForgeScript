import { BaseChannel, MessageType, TextChannel } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$messageExists",
    version: "1.0.5",
    description: "Returns whether given message id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to check for",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    async execute(ctx, [ ch, id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            !!(await (ch as TextChannel).messages.fetch(id).catch(noop))
        )
    },
})