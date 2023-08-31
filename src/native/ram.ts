/* eslint-disable no-undef */
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ram",
    description: "Returns the current ram usage in MB",
    unwrap: false,
    execute(ctx) {
        return Return.success(process.memoryUsage().heapUsed / (1024 ** 2))
    },
})