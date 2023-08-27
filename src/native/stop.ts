import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$stop",
    description: "Stops code execution.",
    unwrap: false,
    execute() {
        return Return.stop()
    }
})