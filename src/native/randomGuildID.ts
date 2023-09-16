import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomGuildID",
    version: "1.0.3",
    description: "Returns a random guild ID",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.client.guilds.cache.randomKey())
    },
})
