import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelExists",
    version: "1.0.0",
    description: "Returns whether a channel id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && ctx.client.channels.cache.has(id))
    },
})
