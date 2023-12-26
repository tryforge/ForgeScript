import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberRoles",
    version: "1.0.0",
    description: "Returns the role ids of a member",
    unwrap: true,
    brackets: false,
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
            description: "The user to get roles from",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, member, sep]) {
        member ??= ctx.member!
        return this.success(
            member?.roles.cache
                .filter((x) => x.id !== x.guild.id)
                .map((x) => x.id)
                .join(sep || ", ")
        )
    },
})
