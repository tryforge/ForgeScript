import { symlinkSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$symlink",
    version: "1.4.0",
    description: "Creates a symbolic link to another path",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make to use as reference",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "other path",
            description: "The other path to link",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ current, other ]) {
        symlinkSync(current, other)
        return this.success()
    },
})