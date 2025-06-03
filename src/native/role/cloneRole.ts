import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$cloneRole",
    version: "2.4.0",
    description: "Clones an existing role of a guild, returns role id if success",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to fetch role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to clone",
            rest: false,
            required: true,
            type: ArgType.Role,
            pointer: 0,
        },
        {
            name: "name",
            description: "The role name for the cloned role",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Role,
    async execute(ctx, [guild, role, name]) {
        const created = await guild.roles
            .create({
                name: name || role.name,
                color: role.color,
                icon: role.icon,
                hoist: role.hoist,
                mentionable: role.mentionable,
                permissions: role.permissions,
                unicodeEmoji: role.unicodeEmoji,
            })
            .catch(ctx.noop)
        return this.success(created ? created.id : undefined)
    },
})