import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$rolePerms",
    version: "1.0.0",
    description: "Returns the role perms",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "role ID",
            description: "The role id return its perms",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            required: false,
            rest: false,
        }
    ],
    execute(ctx, [ guild, role, sep ]) {
        return Return.success(
            (role ?? ctx.role)?.permissions.toArray().join(sep || ", ")
        )
    }
})