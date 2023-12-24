import { ArgType, NativeFunction, Return } from "../structures"

export enum DateType {
    LocaleDate,
    LocaleTime,
    Locale,
    Date,
    ISO,
    UTC,
    Time,
}

export default new NativeFunction({
    name: "$parseDate",
    category: "unknown",
    version: "1.0.2",
    description: "Parses valid ms to a date",
    brackets: true,
    args: [
        {
            name: "ms",
            description: "The ms to convert to date",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "type",
            description: "The date type",
            enum: DateType,
            rest: false,
            required: true,
            type: ArgType.Enum,
        },
    ],
    unwrap: true,
    execute(_, [ms, type]) {
        const date = new Date(ms)

        return this.success(
            type === DateType.Date
                ? date.toDateString()
                : type === DateType.ISO
                    ? date.toISOString()
                    : type === DateType.Locale
                        ? date.toLocaleString()
                        : type === DateType.LocaleDate
                            ? date.toLocaleDateString()
                            : type === DateType.LocaleTime
                                ? date.toLocaleTimeString()
                                : type === DateType.Time
                                    ? date.toTimeString()
                                    : type === DateType.UTC
                                        ? date.toUTCString()
                                        : (null as never)
        )
    },
})
