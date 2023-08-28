import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isButton",
    description: "Whether the interaction is a button",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isButton()))
    },
})