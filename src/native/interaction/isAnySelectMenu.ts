import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isAnySelectMenu",
    version: "1.0.0",
    output: ArgType.Boolean,
    description: "Returns whether the context is a select menu",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isAnySelectMenu()))
    },
})
