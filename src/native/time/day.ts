import { ArgType, NativeFunction, Return } from "../../structures"
import { BasicTimeFormat } from "./hour"

export default new NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day of month",
    aliases: ["$dayOfMonth"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the day",
            rest: false,
            type: ArgType.Enum,
            enum: BasicTimeFormat
        }
    ],
    output: ArgType.String,
    execute: async function(ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { day: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }))
    }
})