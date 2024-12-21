import { unparseDigital } from "../../functions/digital"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$unparseDigital",
    version: "1.5.0",
    description: "Unparses given digital format to ms",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "digital",
            description: "The digital format to convert to ms",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [ digital ]) {
        return this.success(unparseDigital(digital))
    },
})