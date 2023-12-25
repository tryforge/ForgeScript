import { TimeParser } from "../../constants"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$parseMS",
    category: "time",
    version: "1.0.2",
    description: "Parses valid ms to duration",
    brackets: true,
    args: [
        {
            name: "ms",
            description: "The ms to convert to string",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "limit",
            description: "Limit of units to use",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "separator",
            description: "The separator to use for every unit",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "and",
            rest: false,
            description: "Whether to use and word for last unit",
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(_, [ms, limit, sep, and]) {
        return this.success(
            TimeParser.parseToString(ms, {
                and: and || false,
                limit: limit || undefined,
                separator: sep || " ",
            })
        )
    },
})
