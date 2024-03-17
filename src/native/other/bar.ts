import { generateBar } from "../../functions/generateBar"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$bar",
    version: "1.5.0",
    aliases: [
        "$generateBar"
    ],
    description: "Generates a progress bar",
    brackets: true,
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
        }
    ],
    unwrap: true,
    execute(ctx, [ curr, max, len, fill, empty ]) {
        return this.success(
            generateBar(
                curr,
                max,
                len ?? undefined,
                fill ?? undefined,
                empty ?? undefined
            )
        )
    }
})