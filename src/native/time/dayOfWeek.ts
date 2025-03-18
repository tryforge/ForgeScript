import { ArgType, NativeFunction, Return } from "../../structures"
import { ExtendedTimeFormat } from "./month"

export default new NativeFunction({
    name: "$dayOfWeek",
    version: "2.3.0",
    description: "Returns current day of week",
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
        if (format && format !== "numeric" && format !== "2-digit") options.weekday = format
        
        const day = new Date().toLocaleString("en-US", options)
        return this.success(options.weekday ? day : new Date(day).getUTCDay() ?? 7)
    }
})