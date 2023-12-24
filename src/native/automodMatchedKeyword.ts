import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodMatchedKeyword",
    category: "unknown",
    version: "1.2.0",
    description: "The matched keyword the automod caught",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.matchedKeyword)
    },
})