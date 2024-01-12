import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadMessageContext",
    version: "1.4.0",
    aliases: [
        "$useMessageContext",
        "asMessageContext"
    ],
    description: "Loads a message instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        }
    ],
    execute(ctx, [, m ]) {
        ctx.obj = m
        return this.success()
    },
})