import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodContent",
    category: "automod",
    version: "1.2.0",
    description: "The content automod acted upon",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.content)
    },
})