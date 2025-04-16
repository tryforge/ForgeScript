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
    ],
    output: ArgType.Guild,
    async execute(ctx, [name, icon]) {
        const guild = await ctx.client.guilds.create({ name: name, icon: icon }).catch(ctx.noop)
        return this.success(guild?.id)
    },
})