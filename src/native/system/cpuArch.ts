import { ArgType, NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$cpuArch",
    version: "1.0.7",
    output: ArgType.String,
    description: "Returns the cpu architecture",
    unwrap: false,
    execute() {
        return this.success(os.arch())
    },
})
