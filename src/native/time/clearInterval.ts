import { Arg, ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$clearInterval",
    version: "2.3.0",
    description: "Clears an active interval, returns bool",
    aliases: ["$stopInterval"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the interval",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [name]) {
        const interval = ctx.client.intervals.get(name)
        clearInterval(interval)
        ctx.client.intervals.delete(name)
        return this.success(!!interval)
    },
})