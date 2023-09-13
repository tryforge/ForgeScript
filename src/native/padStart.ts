import { ArgType, NativeFunction, Return } from "../structures"
import { camelCase, fill, kebabCase, snakeCase } from "lodash"

export default new NativeFunction({
    name: "$padStart",
    version: "1.0.6",
    description: "Pads a string at the start",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to pad at the start",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "max length",
            description: "The max length of the string",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "filler",
            description: "The filler to use to pad",
            rest: false,
            type: ArgType.String
        },
    ],
    execute(ctx, [ str, max, filler ]) {
        return Return.success(str.padStart(max, filler || undefined))
    },
})