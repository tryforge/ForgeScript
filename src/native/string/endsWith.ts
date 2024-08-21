import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$endsWith",
    version: "1.0.0",
    description: "Checks whether given string ends with X string",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "string",
            description: "The string to check against",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "values",
            required: true,
            description: "The values to match at the end",
            rest: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [str, values]) {
        return this.success(values.some(match => str.endsWith(match)))
    },
})