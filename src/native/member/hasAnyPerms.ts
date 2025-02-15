import { PermissionFlagsBits, PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hasAnyPerms",
    version: "1.4.0",
    description: "Returns whether given member has any of the provided perms",
    unwrap: true,
    aliases: ["$memberHasAnyPerms"],
    brackets: true,
    output: ArgType.Boolean,
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
            description: "The user to check for perms",
            rest: false,
            type: ArgType.Member,
            required: true,
            pointer: 0,
        },
        {
            name: "perms",
            description: "The perms to check for",
            rest: true,
            type: ArgType.String,
            enum: PermissionFlagsBits,
            required: true,
        },
    ],
    execute(ctx, [, member, perms]) {
        return this.success(member.permissions.any(perms as PermissionsString[]) && perms.some(perm => perm in PermissionFlagsBits))
    },
})