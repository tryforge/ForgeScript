import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodContent",
    version: "1.2.0",
    description: "The content automod acted upon",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.automod?.content)
    },
})