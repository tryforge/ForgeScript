import { generateBar } from "../../functions/generateBar"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$bar",
    version: "1.5.0",
    description: "Generates a progress bar",
    aliases: [
        "$generateBar"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "current",
            description: "The current value",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "max",
            description: "The max value of current",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "length",
            description: "The length of the bar",
            rest: false,
            type: ArgType.Number
        },
        {
            name: "fill",
            description: "The string to use as filled points of the bar",
            rest: false,
            type: ArgType.String
        },
        {
            name: "empty",
            description: "The string to use as empty points of the bar",
            rest: false,
            type: ArgType.String
        },
        {
            name: "trunc",
            description: "Whether to truncate instead of round",
            rest: false,
            type: ArgType.Boolean
        },
        {
            name: "fillStart",
            description: "The string to use as filled start of the bar",
            rest: false,
            type: ArgType.String
        },
        {
            name: "fillEnd",
            description: "The string to use as filled end of the bar",
            rest: false,
            type: ArgType.String
        },
        {
            name: "emptyStart",
            description: "The string to use as empty start of the bar",
            rest: false,
            type: ArgType.String
        },
        {
            name: "emptyEnd",
            description: "The string to use as empty end of the bar",
            rest: false,
            type: ArgType.String
        },
    ],
    output: ArgType.String,
    execute(ctx, [ curr, max, len, fill, empty, trunc, fillStart, fillEnd, emptyStart, emptyEnd ]) {
        return this.success(
            generateBar(
                curr,
                max,
                len ?? undefined,
                fill ?? undefined,
                empty ?? undefined,
                !trunc,
                fillStart || undefined,
                fillEnd || undefined,
                emptyStart || undefined,
                emptyEnd || undefined
            )
        )
    }
})