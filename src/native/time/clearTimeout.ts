import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$clearTimeout",
    version: "2.3.0",
    description: "Clears an active timeout, returns bool",
    aliases: ["$stopTimeout"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the timeout",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    execute(ctx, [name]) {
        const timeout = ctx.client.timeouts.get(name)
        clearTimeout(timeout)
        ctx.client.timeouts.delete(name)
        return this.success(!!timeout)
    },
})