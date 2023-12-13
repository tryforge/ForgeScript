import { NativeFunction, Return } from "../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$cpuCores",
    version: "1.0.7",
    description: "Returns the amount of cpu cores",
    unwrap: false,
    execute() {
        return this.success(os.cpus().length)
    },
})
