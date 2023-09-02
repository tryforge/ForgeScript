import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$error",
    version: "1.0.0",
    description: "Returns the error message",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.runtime.extras)
    },
})