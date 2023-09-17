import { writeFileSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$writeFile",
    version: "1.0.0",
    description: "Writes text to a file",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "text",
            description: "The text to write",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "encoding",
            description: "The encoding to use for text",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [path, data, encoding]) {
        // eslint-disable-next-line no-undef
        writeFileSync(path, data, { encoding: (encoding as BufferEncoding) || "utf-8" })

        return Return.success()
    },
})
