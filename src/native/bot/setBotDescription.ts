import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotDescription",
    version: "1.5.0",
    description: "Sets the bot description",
    aliases: [
        "$setClientDescription"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "description",
            description: "The new description",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [desc]) {
        return this.success(!!(await ctx.client.application.edit({ description: desc }).catch(ctx.noop)))
    },
})