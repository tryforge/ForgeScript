import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$error",
    description: "Returns the error message",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.runtime.extras)
    },
})