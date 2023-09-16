import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$import",
    version: "1.0.7",
    description: "Import a property from the provided file",
    args: [
        {
            name: "path",
            description: "The file path where the property will be imported from",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "property",
            description: "The property name",
            required: true,
            type: ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ path, property ]) {
        return Return.success(require(path)[property])
    },
})