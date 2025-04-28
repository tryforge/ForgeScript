import { generateAdvancedBar, generateBar } from "../../functions/generateBar"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$advancedBar",
    version: "1.5.0",
    aliases: [
        "$generateAdvancedBar"
    ],
    description: "Generates an advanced progress bar",
    brackets: true,
    args: [
        {
            name: "current",
            description: "The current value",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "max",
            description: "The max value of current",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "length",
            description: "The length of the bar",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "values",
            description: "The values to make the bar with, for example `=;~;#` means `0%;33%;66%`",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ curr, max, len, values ]) {
        return this.success(
            generateAdvancedBar(
                curr,
                max,
                len || undefined,
                values
            )
        )
    }
})