import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$selectMenuValues",
    version: "1.0.0",
    description: "Returns select menu values",
    brackets: false,
    args: [
        {
            name: "index",
            description: "The index of the value",
            type: ArgType.Number,
            rest: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            type: ArgType.String,
            rest: false,
        },
    ],
    output: array<ArgType.String>(),
    unwrap: true,
    execute(ctx, [index, sep]) {
        if (!ctx.isSelectMenu()) return this.success()

        if (index) {
            return this.success(ctx.interaction.values[index])
        } else {
            return this.success(ctx.interaction.values.join(sep ?? ", "))
        }
    },
})