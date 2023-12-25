/* eslint-disable no-undef */
import { cpus, loadavg } from "os"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$cpu",
    category: "system",
    version: "1.0.0",
    description: "Returns the cpu usage of the host (not accurate)",
    unwrap: false,
    execute() {
        return this.success(loadavg()[0] * 100)
    },
})
