import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberLowestRoleID",
    version: "1.5.0",
    description: "Returns the lowest role id of a member",
    unwrap: true,
    output: ArgType.Role,
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
            pointer: 0,
            description: "The user to get its lowest role id",
            rest: false,
            type: ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [guild, member]) {
        guild ??= ctx.guild!
        member ??= ctx.member!
        const lowest = member?.roles.cache.filter(role => role.id !== guild?.id).sort((a, b) => a.position - b.position).first()

        return this.success(lowest?.id ?? guild?.id)
    },
})