import { copyFileSync, cpSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$copyFile",
    version: "1.2.0",
    description: "Copies given path to another path",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make a copy of",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "destination",
            description: "The output path to copy to",
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
        return this.success()
    },
})