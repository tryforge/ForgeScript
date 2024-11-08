import { digital } from "../../functions/digital"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$parseDigital",
    version: "1.5.0",
    description: "Parses given ms to digital format",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "ms",
            description: "The ms to convert to digital format",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [ ms ]) {
        return this.success(digital(ms))
    },
})