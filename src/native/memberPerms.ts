import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberPerms",
    description: "Returns the member perms",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "role ID",
            description: "The member id return its perms",
            rest: false,
            type: ArgType.Member,
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
    execute(ctx, [ guild, member, sep ]) {
        return Return.success(
            (member ?? ctx.member)?.permissions.toArray().join(sep || ", ")
        )
    }
})