import { mkdirSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mkdir",
    description: "Creates a directory",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path for the dir",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ path ]) {
        return Return.success(void mkdirSync(path))
    },
})