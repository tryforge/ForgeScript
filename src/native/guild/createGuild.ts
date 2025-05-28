import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createGuild",
    version: "1.5.0",
    description: "Creates a new guild, returns guild id",
    aliases: [
        "$createServer"
    ],
    unwrap: true,
    brackets: true,
    deprecated: true,
    args: [
        {
            name: "name",
            description: "The name for the guild",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "icon",
            description: "The icon for the guild",
            rest: false,
            type: ArgType.URL,
        },
        {
            name: "template",
            description: "The template to use for the guild",
            rest: false,
            type: ArgType.Template,
        },
    ],
    output: ArgType.Guild,
    async execute(ctx, [name, icon, template]) {
        const guild = await (template
            ? template.createGuild(name, icon || undefined).catch(ctx.noop)
            : ctx.client.guilds.create({ name, icon }).catch(ctx.noop)
        )
        return this.success(guild?.id)
    },
})