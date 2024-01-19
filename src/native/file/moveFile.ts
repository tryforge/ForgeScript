import { copyFileSync, cpSync, rmSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$moveFile",
    version: "1.4.0",
    description: "Moves a path to another",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make to move",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "destination",
            description: "The output path",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ old, now ]) {
        if (statSync(old).isDirectory())
            cpSync(old, now)
        else
            copyFileSync(old, now)
        rmSync(old, { recursive: true })
        return this.success()
    },
})