import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberPerms",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the member perms",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member id to return its perms",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, member, sep]) {
        return this.success((member ?? ctx.member)?.permissions.toArray().join(sep || ", "))
    },
})
