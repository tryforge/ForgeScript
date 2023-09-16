import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"
import { join } from "path"

export default new NativeFunction({
    name: "$pathJoin",
    version: "1.0.7",
    description: "Join the given paths",
    args: [
        {
            name: "paths",
            description: "The file paths to join",
            required: true,
            type: ArgType.String,
            rest: true
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ paths ]) {
        return Return.success(join(...paths))
    },
})