import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isAnySelectMenu",
    description: "Returns whether the context is a select menu",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isAnySelectMenu()))
    },
})