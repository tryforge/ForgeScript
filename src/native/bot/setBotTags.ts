import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setBotTags",
    version: "1.5.0",
    description: "Sets the bot tags",
    aliases: [
        "$setClientTags"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "tags",
            description: "The new tags",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [tags]) {
        return this.success(!!(await ctx.client.application.edit({ tags: tags.filter(tag => tag.trim() !== "") }).catch(ctx.noop)))
    },
})