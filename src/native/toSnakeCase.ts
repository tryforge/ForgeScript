import { ArgType, NativeFunction, Return } from "../structures"
import { snakeCase } from "lodash"

export default new NativeFunction({
    name: "$toSnakeCase",
    category: "unknown",
    version: "1.0.6",
    description: "Converts a string to snake case",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn snake case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [m]) {
        return this.success(snakeCase(m))
    },
})
