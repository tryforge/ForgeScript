import { CalendarType } from "../../structures"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setCalendar",
    version: "1.5.0",
    aliases: ["$calendar"],
    description: "Sets the calendar for time functions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The calendar type to use",
            rest: false,
            type: ArgType.Enum,
            enum: CalendarType,
            required: true,
        },
    ],
    execute(ctx, [type]) {
        ctx.calendar = type
        return this.success()
    }
})