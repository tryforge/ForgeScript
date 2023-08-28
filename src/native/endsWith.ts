import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$endsWith",
    description: "Checks whether given string ends with X string",
    unwrap: true,
    args: [
        {
            name: "str",
            description: "The string to check against",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "value",
            required: true,
            description: "The value to match at the end",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ str, match ]) {
        return Return.success(str.endsWith(match))   
    }
})