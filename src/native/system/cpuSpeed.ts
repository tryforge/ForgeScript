import { NativeFunction, Return } from "../../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$cpuSpeed",
    version: "1.0.7",
    description: "Returns the cpu speed in MHz",
    unwrap: false,
    execute() {
        return this.success(os.cpus()[0]?.speed)
    },
})
