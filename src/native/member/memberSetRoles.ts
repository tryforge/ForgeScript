import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberSetRoles",
    version: "1.0.0",
    description: "Sets roles to a member and returns bool",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
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
            description: "The user to set roles to",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "roles",
            description: "The roles to set",
            rest: true,
            type: ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(ctx, [, member, roles]) {
        member ??= ctx.member!
        const d = await member.roles.set(roles).catch(noop)

        return this.success(!!d)
    },
})
