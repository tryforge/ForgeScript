import { createHash, randomUUID } from "crypto"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$sha256",
    version: "1.2.0",
    description: "Creates a sha256 key from given input",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "input",
            description: "Input to use for feeding",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "encoding",
            type: ArgType.String,
            description: "The output encoding",
            rest: false,
            required: false
        }
    ],
    execute(ctx, [ input, enc ]) {
        const sha256 = createHash("sha256").update(input).digest().toString((enc || "hex") as BufferEncoding)
        return this.success(sha256)
    }
})