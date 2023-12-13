import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomEmojiID",
    version: "1.0.3",
    description: "Returns a random emoji ID",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.emojis.cache.randomKey())
    },
})
