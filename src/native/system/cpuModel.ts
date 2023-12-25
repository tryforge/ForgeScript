import { NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$cpuModel",
    category: "system",
    version: "1.0.7",
    description: "Returns the cpu model",
    unwrap: false,
    execute() {
        return this.success(os.cpus()[0]?.model)
    },
})
