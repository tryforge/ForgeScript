import { NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$osUptime",
    category: "system",
    version: "1.0.7",
    description: "Returns the operating system uptime (seconds)",
    unwrap: false,
    execute() {
        return this.success(os.uptime())
    },
})
