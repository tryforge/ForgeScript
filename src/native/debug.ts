import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$debug",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the debug message",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.runtime.extras)
    },
})
