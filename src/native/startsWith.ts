import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$startsWith",
    version: "1.0.0",
    description: "Checks whether given string starts with X string",
    unwrap: true,
    args: [
        {
            name: "str",
            description: "The string to check against",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "value",
            required: true,
            description: "The value to match at the start",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(_, [str, match]) {
        return this.success(str.startsWith(match))
    },
})
