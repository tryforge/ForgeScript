import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadChannelContext",
    version: "1.4.0",
    aliases: [
        "$useChannelContext",
        "$asChannelContext"
    ],
    brackets: true,
    description: "Loads a channel instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Channel
        }
    ],
    execute(ctx, [ ch ]) {
        ctx.obj = ch
        return this.success()
    },
})