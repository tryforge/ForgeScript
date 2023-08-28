import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isUserSelectMenu",
    description: "Returns whether the context is a user select menu",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isUserSelectMenu()))
    },
})