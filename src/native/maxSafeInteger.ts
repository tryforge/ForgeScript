import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$maxSafeInteger",
    version: "1.0.6",
    description: "Returns the highest safe integer",
    unwrap: false,
    execute(ctx) {
        return Return.success(Number.MAX_SAFE_INTEGER)
    },
})