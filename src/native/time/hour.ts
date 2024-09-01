import { ArgType, NativeFunction, Return } from "../../structures"

export enum BasicTimeFormat {
    Numeric = "numeric",
    TwoDigit = "2-digit"
}

export default new NativeFunction({
    name: "$hour",
    version: "1.2.0",
    description: "Returns current hour",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the hour",
            rest: false,
            type: ArgType.Enum,
            enum: BasicTimeFormat
        }
    ],
    output: ArgType.Number,
    execute: async function(ctx, [format]) {
        format ??= BasicTimeFormat.Numeric
        const hour = new Date().toLocaleString("en-US", { hour: format, hour12: false, timeZone: ctx.timezone, calendar: ctx.calendar })
        return this.success(format === BasicTimeFormat.Numeric ? parseInt(hour, 10).toString() : hour)
    }
})