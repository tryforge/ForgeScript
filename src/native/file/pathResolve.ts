import path from "path"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$pathResolve",
    version: "2.2.0",
    description: "Resolves paths into an absolute path",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "paths",
            description: "The paths to resolve",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [paths]) {
        return this.success(path.resolve(...paths))
    },
})