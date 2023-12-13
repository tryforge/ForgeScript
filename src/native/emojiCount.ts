import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of all servers",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.client.emojis.cache.size)
    },
})
