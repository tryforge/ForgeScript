/* eslint-disable no-undef */
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ram",
    version: "1.0.0",
    description: "Returns the current ram usage in MB",
    unwrap: false,
    execute() {
        return Return.success(process.memoryUsage().heapUsed / 1024 ** 2)
    },
})
