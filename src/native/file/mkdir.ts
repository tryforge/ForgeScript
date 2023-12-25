import { mkdirSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$mkdir",
    category: "file",
    version: "1.0.0",
    description: "Creates a directory",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path for the dir",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [path]) {
        return this.success(void mkdirSync(path))
    },
})
