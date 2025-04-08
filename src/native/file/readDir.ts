import { readdirSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$readDir",
    version: "1.5.0",
    description: "Reads the contents of a directory",
    unwrap: true,
    brackets: true,
    output: [
        ArgType.Json,
        array<ArgType.String>()
    ],
    args: [
        {
            name: "path",
            description: "The path to the directory",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for each result",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "encoding",
            description: "The encoding to use for the result",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [path, sep, encoding]) {
        const dirs = readdirSync(path, { encoding: (encoding as BufferEncoding) || "utf-8" })
        if (sep) return this.success(dirs?.join(sep))
        return this.successJSON(dirs)
    },
})