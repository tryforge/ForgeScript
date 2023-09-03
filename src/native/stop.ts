import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$stop",
    version: "1.0.0",
    description: "Stops code execution",
    unwrap: false,
    execute() {
        return Return.stop()
    }
})