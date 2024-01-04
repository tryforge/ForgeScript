import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodContent",
    version: "1.2.0",
    description: "The content automod acted upon",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.content)
    },
})