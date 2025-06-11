import { renameSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$renameFile",
    version: "1.5.0",
    description: "Renames a file",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "old path",
            description: "The old path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new path",
            description: "The new path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [oldPath, newPath]) {
        renameSync(oldPath, newPath)
        return this.success()
    },
})