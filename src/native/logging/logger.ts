import { ArgType, NativeFunction } from "../../structures"
import { LogType, Logger } from "../../structures/@internal/Logger"

export default new NativeFunction({
    name: "$logger",
    version: "1.3.0",
    description: "Implements Logger API of ForgeScript.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "log type",
            description: "The log type",
            enum: LogType,
            type: ArgType.Enum,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "What to log",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ type, value ]) {
        Logger[LogType[type].toLowerCase() as Lowercase<keyof typeof LogType>](value)
        return this.success()
    },
})