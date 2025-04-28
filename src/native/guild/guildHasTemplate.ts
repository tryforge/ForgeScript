import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildHasTemplate",
    version: "1.5.0",
    description: "Returns whether this guild has a template",
    unwrap: true,
    brackets: false,
    aliases: [
        "$hasGuildTemplate"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to check for template",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild]) {
        return this.success((await (guild ?? ctx.guild)?.fetchTemplates())?.size ?? 0 > 0)
    },
})