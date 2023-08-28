import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$selectMenuValues",
    description: "Returns select menu values",
    brackets: false,
    args: [
        {
            name: "index",
            description: "The index of the value",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ index ]) {
        if (!ctx.isSelectMenu()) return Return.success()
        
        if (this.hasFields) {
            return Return.success(ctx.interaction.values[index])
        } else {
            return Return.success(ctx.interaction.values.join(", "))
        }
    }
})