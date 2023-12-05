import { networkInterfaces } from "os"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$networkCardNames",
    version: "1.2.0",
    description: "Returns your network's card names",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return Return.success(Object.keys(networkInterfaces()).join(sep ?? ", "))
    }
})