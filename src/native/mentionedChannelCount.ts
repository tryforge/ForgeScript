import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentionedChannelCount",
    category: "unknown",
    version: "1.3.0",
    description: "Returns the mentioned channel count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.channels.size)
    },
})
