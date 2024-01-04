import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotName",
    version: "1.0.0",
    description: "Sets the bot name",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientName"
    ],
    args: [
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [name]) {
        return this.success(!!(await ctx.client.user.setUsername(name).catch(noop)))
    },
})
