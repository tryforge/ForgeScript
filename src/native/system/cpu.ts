/* eslint-disable no-undef */
import { cpus, loadavg } from "os"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$cpu",
    version: "1.0.0",
    description: "Returns the cpu usage of the host (not accurate)",
    aliases: ["$cpuUsage"],
    unwrap: false,
    output: ArgType.Number,
    execute() {
        return this.success(loadavg()[0] * 100)
    },
})