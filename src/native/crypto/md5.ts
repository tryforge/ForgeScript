import { createHash, randomUUID } from "crypto"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$md5",
    category: "crypto",
    version: "1.2.0",
    description: "Creates a md5 key from given input",
    unwrap: true,
    brackets: true,
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
        const md5 = createHash("md5").update(input).digest().toString((enc || "hex") as BufferEncoding)
        return this.success(md5)
    }
})