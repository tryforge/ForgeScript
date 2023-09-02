import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$debug",
    description: "Returns the debug message",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.runtime.extras)
    }
})