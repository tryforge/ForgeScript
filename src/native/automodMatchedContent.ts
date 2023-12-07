import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodMatchedContent",
    version: "1.2.0",
    description: "The matched content automod acted upon",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.automod?.matchedContent)
    },
})