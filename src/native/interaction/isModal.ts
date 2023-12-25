import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isModal",
    category: "interaction",
    version: "1.0.0",
    description: "Returns whether the context is a modal",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isModalSubmit()))
    },
})
