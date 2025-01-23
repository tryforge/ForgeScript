import path from "path"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$pathJoin",
    version: "2.2.0",
    description: "Joins paths together",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "paths",
            description: "The paths to join with",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [paths]) {
        return this.success(path.join(...paths))
    },
})