import { ArgType, NativeFunction, Return } from "../structures"
import lodash from "lodash"

export default new NativeFunction({
    name: "$toTitleCase",
    version: "1.0.6",
    description: "Converts a string to title case",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn title case",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ m ]) {
        return Return.success(m.split(/ +/).map(x => lodash.capitalize(x)).join(" "))
    },
})