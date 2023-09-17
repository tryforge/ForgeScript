import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$parseString",
    version: "1.0.2",
    description: "Parses valid duration string to ms",
    brackets: true,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: ArgType.Time,
            required: true,
        },
    ],
    unwrap: true,
    execute(_, [ms]) {
        return Return.success(ms)
    },
})
