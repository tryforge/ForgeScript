import { appendFileSync, truncateSync, writeFileSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$truncateFile",
    version: "1.0.0",
    description: "Truncates text in a file to given length",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "length",
            description: "The new length for the file",
            rest: false,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ path, data ]) {
        // eslint-disable-next-line no-undef
        truncateSync(path, data)

        return Return.success()
    },
})