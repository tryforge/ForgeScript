import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildTemplateCode",
    version: "2.4.0",
    description: "Returns the template code of a guild",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverTemplateCode"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to get template from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
    ],
    output: ArgType.Template,
    async execute(ctx, [guild]) {
        const template = (await (guild ?? ctx.guild)?.fetchTemplates().catch(ctx.noop))?.first()
        return this.success(template?.code)
    },
})