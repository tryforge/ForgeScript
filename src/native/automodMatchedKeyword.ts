import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodMatchedKeyword",
    version: "1.2.0",
    description: "The matched keyword the automod caught",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.automod?.matchedKeyword)
    },
})