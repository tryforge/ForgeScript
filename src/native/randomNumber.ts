import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomNumber",
    category: "unknown",
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
            type: ArgType.Number,
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
            type: ArgType.Boolean,
        },
    ],
    execute(_, [min, max, decimals]) {
        const rnd = max ? Math.random() * (max - min) + min : Math.random() * min
        return this.success(!decimals ? Math.floor(rnd) : rnd)
    },
})
