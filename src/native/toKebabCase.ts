import { ArgType, NativeFunction, Return } from "../structures"
import { camelCase, kebabCase, snakeCase } from "lodash"

export default new NativeFunction({
    name: "$toKebabCase",
    version: "1.0.6",
    description: "Converts a string to kebab case",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn kebab case",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ m ]) {
        return Return.success(kebabCase(m))
    },
})