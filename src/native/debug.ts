import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$debug",
    version: "1.0.0",
    description: "Returns the debug message",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.runtime.extras)
    }
})