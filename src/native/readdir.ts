import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"
import { readdirSync } from "fs"

export default new NativeFunction({
    name: "$readdir",
    version: "1.0.7",
    description: "Reads a directory and load the result into a environment variable",
    args: [
        {
            name: "path",
            description: "The file path where the property will be imported from",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "variable",
            description: "The environment variable name",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "separator",
            description: "The result separator",
            required: false,
            type: ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ path, variable, separator ]) {
        const files = readdirSync(path)
        ctx.setEnvironmentKey(variable, files.join(separator ?? ","))
        
        return Return.success()
    },
})