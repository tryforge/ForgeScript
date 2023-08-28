import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$includes",
    description: "Checks whether given string includes X string",
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
            description: "The value to match",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ str, match ]) {
        return Return.success(str.includes(match))   
    }
})