import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isChannelSelectMenu",
    version: "1.0.0",
    description: "Returns whether the context is a channel select menu",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isChannelSelectMenu()))
    },
})
