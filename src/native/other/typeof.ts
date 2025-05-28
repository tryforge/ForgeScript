import { ArgType, NativeFunction, Return } from "../../structures"

export const BigIntFormatRegex = /^\d+n$/

export default new NativeFunction({
    name: "$typeof",
    version: "2.4.0",
    description: "Returns the type of the provided argument",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "argument",
            rest: false,
            description: "The argument to get its type",
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.String,
    execute(ctx, [arg]) {
        let type: string

        if (arg === "undefined") type = "undefined"
        else if (arg === "true" || arg === "false") type = "boolean"
        else if (BigIntFormatRegex.test(arg)) type = "bigint"
        else if (!!arg.trim() && !isNaN(Number(arg))) type = "number"
        else {
            try {
                JSON.parse(arg)
                type = "object"
            } catch {
                type = "string"
            }
        }

        return this.success(type)
    },
})