import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$error",
    category: "other",
    version: "1.0.0",
    description: "Returns the error message",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.runtime.extras)
    },
})
