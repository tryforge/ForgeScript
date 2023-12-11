import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$executionTime",
    version: "1.0.3",
    description: "Returns current execution time",
    unwrap: false,
    execute(ctx) {
        return Return.success(performance.now() - ctx.executionTimestamp)
    },
})
