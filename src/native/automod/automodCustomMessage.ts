import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodCustomMessage",
    version: "1.2.0",
    description: "Returns the custom message used by automod on this detection",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.customMessage)
    },
})