import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isModal",
    description: "Returns whether the context is a modal",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isModalSubmit()))
    },
})