import { deflateSync, inflateSync } from "zlib"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deflate",
    version: "1.2.0",
    description: "Compresses given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "The text to compress",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The output encoding to use",
            type: ArgType.String
        }
    ],
    execute(ctx, [ input, out ]) {
        return this.success(deflateSync(input).toString((out ?? "hex") as BufferEncoding))
    },
})