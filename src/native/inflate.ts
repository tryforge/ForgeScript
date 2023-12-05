import { deflateSync, inflateSync } from "zlib"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$inflate",
    version: "1.2.0",
    description: "Decompresses given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "The text to decompress",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The input encoding to use",
            type: ArgType.String
        }
    ],
    execute(ctx, [ input, enc ]) {
        return Return.success(inflateSync(Buffer.from(input, (enc ?? "hex") as BufferEncoding)).toString("utf-8"))
    },
})