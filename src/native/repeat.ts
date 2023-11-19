import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$repeat",
    version: "1.1.0",
    description: "Repeats given text for x times",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to repeat",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "amount",
            rest: false,
            required: true,
            type: ArgType.Number,
            description: "How many times to repeat this text"
        }
    ],
    execute(ctx, [ txt, times ]) {
        return Return.success(txt.repeat(times))
    },
})