import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createGuildTemplate",
    version: "1.5.0",
    description: "Creates template for a guild, returns template code",
    aliases: [
        "$createServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create template on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the template",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description for the template",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    async execute(ctx, [guild, name, desc]) {
        return this.success((await guild.createTemplate(name, desc || undefined).catch(ctx.noop))?.code)
    },
})