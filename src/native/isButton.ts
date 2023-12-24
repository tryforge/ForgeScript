import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isButton",
    category: "unknown",
    version: "1.0.0",
    description: "Whether the interaction is a button",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isButton()))
    },
})
