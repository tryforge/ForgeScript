import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$cwd",
    version: "1.0.7",
    description: "Returns the process cwd",
    unwrap: true,
    execute() {
        // eslint-disable-next-line no-undef
        return Return.success(process.cwd())
    },
})