import { ArgType, NativeFunction, Return } from "../../structures"

export enum CalendarType {
    Day,
    Week
}

function getDayOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 1)
    const diff = date.getTime() - start.getTime()
    const ms = 1000 * 60 * 60 * 24
    return Math.floor(diff / ms) + 1
}

function getWeekOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 1)
    const days = (date.getTime() - start.getTime()) / 86400000
    return Math.ceil((days + start.getDay() + 1) / 7)
}

export default new NativeFunction({
    name: "$calendar",
    version: "1.5.0",
    description: "Returns a calendar component of the current year",
    unwrap: true,
    brackets: true,
    output: ArgType.Number,
    args: [
        {
            name: "type",
            description: "The type of the calendar year",
            rest: false,
            type: ArgType.Enum,
            enum: CalendarType,
            required: true,
        },
    ],
    execute(ctx, [type]) {
        const date = new Date()

        return this.success(
            type === CalendarType.Day
                ? getDayOfYear(date)
                : type === CalendarType.Week
                    ? getWeekOfYear(date)
                    : (null as never)
        )
    }
})