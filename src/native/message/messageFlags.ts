import { MessageFlags } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$messageFlags",
    version: "1.5.0",
    description: "Returns the flags of a message",
    brackets: false,
    unwrap: true,
    output: array(MessageFlags),
    args: [
        {
            name: "channel ID",
            description: "The channel to get the message from",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "message ID",
            description: "The message to return its flags",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, msg, sep]) {
        return this.success((msg ?? ctx.message)?.flags.toArray().join(sep || ", "))
    },
})