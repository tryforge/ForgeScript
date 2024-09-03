import { includes } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export enum ExtendedTimeFormat {
    Numeric = "numeric",
    TwoDigit = "2-digit",
    Long = "long",
    Short = "short",
    Narrow = "narrow"
}

export default new NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the day",
            rest: false,
            type: ArgType.Enum,
            enum: ExtendedTimeFormat
        }
    ],
    output: ArgType.String,
    execute: async function(ctx, [format]) {
        const options: Intl.DateTimeFormatOptions = { timeZone: ctx.timezone, calendar: ctx.calendar }

        if (format === "numeric" || format === "2-digit" || !format) {
            options.day = format || "numeric"
        } else {
            options.weekday = format
        }

        return this.success(new Date().toLocaleString("en-US", options))
    }
})