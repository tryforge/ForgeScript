import { rmSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteFile",
    version: "1.0.0",
    description: "Deletes a file",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [path]) {
        // eslint-disable-next-line no-undef
        rmSync(path, { recursive: true })

        return this.success()
    },
})
