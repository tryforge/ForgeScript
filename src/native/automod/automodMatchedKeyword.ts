import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodMatchedKeyword",
    version: "1.2.0",
    description: "The matched keyword the automod caught",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.matchedKeyword)
    },
})