import { ArgType, NativeFunction, Return } from "../../structures"

function getDayOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 1)
    const diff = date.getTime() - start.getTime()
    const ms = 1000 * 60 * 60 * 24
    return Math.floor(diff / ms) + 1
}

export default new NativeFunction({
    name: "$calendarDay",
    version: "1.5.0",
    description: "Returns the calendar day",
    unwrap: true,
    output: ArgType.Number,
    execute: async function(ctx) {
        return this.success(getDayOfYear(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone, calendar: ctx.calendar }))))
    }
})