import { TimestampStyles, time } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$discordTimestamp",
    version: "1.4.0",
    description: "Creates a discord timestamp",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "time",
            description: "The time to turn into timestamp",
            rest: false,
            required: true,
            type: ArgType.Time
        },
        {
            name: "style",
            rest: false,
            required: true,
            enum: TimestampStyles,
            type: ArgType.Enum,
            description: "The timestamp style"
        }
    ],
    output: ArgType.String,
    execute(ctx, [ ms, style ]) {
        return this.success(time(new Date(ms), style))
    },
})