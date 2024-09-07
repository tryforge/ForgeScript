import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildLowestRoleID",
    version: "1.5.0",
    description: "Returns the lowest role id of a guild",
    aliases: [
        "$serverLowestRoleID"
    ],
    brackets: false,
    output: ArgType.Role,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve its lowest role",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild ??= ctx.guild!
        const lowest = guild.roles.cache.filter(role => role.id !== guild.id).sort((a, b) => a.position - b.position).first()

        return this.success(lowest?.id ?? guild.id)
    },
})