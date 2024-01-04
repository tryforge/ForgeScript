import { ArgType, NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$osUptime",
    version: "1.0.7",
    description: "Returns the operating system uptime (seconds)",
    unwrap: false,
    output: ArgType.Number,
    execute() {
        return this.success(os.uptime())
    },
})
