import { ArgType, NativeFunction, Return } from "../../structures"

function getWeekOfMonth(date: Date) {
    const day = date.getDate()
    return Math.floor((day - 1) / 7)
}

export default new NativeFunction({
    name: "$week",
    version: "1.5.0",
    description: "Returns current week of month",
    unwrap: true,
    output: ArgType.Number,
    execute: function() {
        return this.success(getWeekOfMonth(new Date()))
    }
})