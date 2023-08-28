import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isStringSelectMenu",
    description: "Returns whether the context is a string select menu",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isStringSelectMenu()))
    },
})