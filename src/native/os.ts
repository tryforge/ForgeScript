import { NativeFunction, Return } from "../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$os",
    version: "1.0.7",
    description: "Returns the operating system name",
    unwrap: false,
    execute(ctx) {
        return Return.success(os.platform())
    },
})
