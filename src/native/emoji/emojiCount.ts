import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of all servers",
    unwrap: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.emojis.cache.size)
    },
})
