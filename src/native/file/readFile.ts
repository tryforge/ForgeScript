import { appendFileSync, readFileSync, truncateSync, writeFileSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$readFile",
    version: "1.0.0",
    description: "reads text from a file",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "encoding",
            description: "The encoding to use for the text",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [path, encoding]) {
        // eslint-disable-next-line no-undef
        const txt = readFileSync(path, { encoding: (encoding as BufferEncoding) || "utf-8" })

        return this.success(txt)
    },
})
