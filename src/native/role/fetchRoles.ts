import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchRoles",
    version: "2.2.0",
    description: "Caches all roles of a guild",
    aliases: ["$fetchRole"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache roles of",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "role ID",
            description: "The role to fetch",
            rest: false,
            type: ArgType.Role,
            pointer: 0
        },
    ],
    async execute(ctx, [guild, role]) {
        guild ??= ctx.guild!
        if (role) await guild?.roles.fetch(role.id)
        else await guild?.roles.fetch()
        return this.success()
    },
})