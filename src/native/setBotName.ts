import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setBotName",
    version: "1.0.0",
    description: "Sets the bot name",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [name]) {
        return Return.success(!!(await ctx.client.user.setUsername(name).catch(noop)))
    },
})
