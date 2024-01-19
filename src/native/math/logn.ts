import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$logn",
    version: "1.0.0",
    description: "Returns the natural logarithm (base e) of a number",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "Number to get its logarithm",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.log(n))
    },
})
