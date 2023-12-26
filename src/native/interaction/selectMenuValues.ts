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
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [index]) {
        if (!ctx.isSelectMenu()) return this.success()

        if (this.hasFields) {
            return this.success(ctx.interaction.values[index])
        } else {
            return this.success(ctx.interaction.values.join(", "))
        }
    },
})
