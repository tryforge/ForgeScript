import { ArgType, NativeFunction, Return } from "../../structures"

function getWeekOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 1)
    const days = (date.getTime() - start.getTime()) / 86400000
    return Math.ceil((days + start.getDay() + 1) / 7)
}

export default new NativeFunction({
    name: "$calendarWeek",
    version: "1.5.0",
    description: "Returns the calendar week",
    unwrap: true,
    output: ArgType.Number,
    execute: async function(ctx) {
        return this.success(getWeekOfYear(new Date(new Date().toLocaleString("en-US", { timeZone: ctx.timezone, calendar: ctx.calendar }))))
    }
})