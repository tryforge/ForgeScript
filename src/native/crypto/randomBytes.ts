import { createCipheriv, createDecipheriv, randomBytes } from "crypto"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$randomBytes",
    version: "1.5.0",
    description: "Generates a string of random bytes, in hex",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "length",
            description: "The length of the hex string",
            rest: false,
            required: true,
            type: ArgType.Number
        },
    ],
    unwrap: true,
    execute(ctx, [ len ]) {
        return this.success(randomBytes(len).toString("hex"))
    }
})