import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$abs",
    version: "1.0.1",
    description:
        "Returns the absolute value of a number (the value without regard to whether it is positive or negative)",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.abs(n))
    },
})
