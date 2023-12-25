import { NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$cpuArch",
    category: "system",
    version: "1.0.7",
    description: "Returns the cpu architecture",
    unwrap: false,
    execute() {
        return this.success(os.arch())
    },
})
