import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isUserSelectMenu",
    version: "1.0.0",
    description: "Returns whether the context is a user select menu",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isUserSelectMenu()))
    },
})
