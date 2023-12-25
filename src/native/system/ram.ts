/* eslint-disable no-undef */
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$ram",
    category: "system",
    version: "1.0.0",
    description: "Returns the current ram usage in MB",
    unwrap: false,
    execute() {
        return this.success(process.memoryUsage().heapUsed / 1024 ** 2)
    },
})
