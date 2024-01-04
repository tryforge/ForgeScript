import { randomUUID } from "crypto"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomUUID",
    version: "1.2.0",
    description: "Returns a random uuid",
    unwrap: false,
    output: ArgType.String,
    execute() {
        return this.success(randomUUID())
    }
})