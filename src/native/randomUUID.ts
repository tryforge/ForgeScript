import { randomUUID } from "crypto"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomUUID",
    version: "1.2.0",
    description: "Returns a random uuid",
    unwrap: false,
    execute() {
        return Return.success(randomUUID())
    }
})