import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildCount",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the guild count",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.size)
    },
})
