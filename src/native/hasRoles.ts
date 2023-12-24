import { PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$hasRoles",
    category: "unknown",
    version: "1.1.0",
    description: "Returns whether given member has all roles",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to check for roles",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "roles",
            description: "The roles to check for",
            rest: true,
            type: ArgType.Role,
            required: true,
            pointer: 0
        },
    ],
    execute(_, [, member, roles]) {
        return this.success(member.roles.cache.hasAll(...roles.map(x => x.id)))
    },
})
