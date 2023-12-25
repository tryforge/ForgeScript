import { existsSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fileSize",
    category: "file",
    version: "1.2.0",
    description: "Gets size of a file or directory in bytes",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to file or directory",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [path]) {
        return this.success(statSync(path).size)
    },
})
