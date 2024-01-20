import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reply",
    version: "1.0.0",
    description: "Marks the response as a reply",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is at",
            rest: false,
            required: true,
            type: ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message to reply to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "disable ping",
            description: "Whether to disable ping of reply",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [, message, disable]) {
        ctx.container.reference = (message ?? ctx.message)?.id
        ctx.container.allowedMentions.repliedUser = !disable
        return this.success()
    },
})
