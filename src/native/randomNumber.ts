import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomNumber",
    version: "1.0.0",
    description: "Returns a random number (no cache)",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "min",
            description: "The minimum possible number",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "max",
            description: "The max possible number",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "decimals",
            description: "Whether to use decimals",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    execute(ctx, [ min, max, decimals ]) {
        const rnd = max ? Math.random() * (max - min) + min : Math.random() * min
        return Return.success(decimals ? Math.floor(rnd) : rnd)
    },
})