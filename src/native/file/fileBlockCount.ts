import { existsSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fileBlockCount",
    version: "1.4.0",
    description: "Gets block count of a file or directory",
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
        return this.success(statSync(path).blocks)
    },
})
