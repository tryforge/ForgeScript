import { ArgType, NativeFunction, Return } from "../../structures"

export enum ExtendedTimeFormat {
    Numeric = "numeric",
    TwoDigit = "2-digit",
    Long = "long",
    Short = "short",
    Narrow = "narrow"
}

export default new NativeFunction({
    name: "$month",
    version: "1.2.0",
    description: "Returns current month",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "format",
            description: "The format of the month",
            rest: false,
            type: ArgType.Enum,
            enum: ExtendedTimeFormat
        }
    ],
    output: ArgType.String,
    execute: async function(ctx, [format]) {
        return this.success(new Date().toLocaleString("en-US", { month: format || "numeric", timeZone: ctx.timezone, calendar: ctx.calendar }))
    }
})