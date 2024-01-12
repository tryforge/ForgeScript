import { existsSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isFile",
    version: "1.4.0",
    description: "Checks whether a path is a file",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
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
        return this.success(statSync(path).isFile())
    },
})
