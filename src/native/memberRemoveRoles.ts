import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberRemoveRoles",
    version: "1.0.0",
    description: "Removes roles from a member and returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The user to remove roles from",
            rest: false,
            type: ArgType.Member,
            required: true,
        },
        {
            name: "roles",
            description: "The roles to remove",
            rest: true,
            type: ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(ctx, [guild, member, roles]) {
        member ??= ctx.member!
        const d = await member.roles.remove(roles).catch(noop)

        return Return.success(!!d)
    },
})
