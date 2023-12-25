import { existsSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fileExists",
    category: "file",
    version: "1.0.0",
    description: "Checks whether a path exists",
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
        return this.success(existsSync(path))
    },
})
