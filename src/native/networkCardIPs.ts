import { networkInterfaces } from "os"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$networkCardIPs",
    version: "1.2.0",
    description: "Returns your network's card ips",
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
        return Return.success(Object.values(networkInterfaces()).map(x => x?.map(x => x.address).filter(Boolean).join(sep ?? ", ")).join(sep ?? ", "))
    }
})