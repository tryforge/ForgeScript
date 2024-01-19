import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadMemberContext",
    version: "1.4.0",
    aliases: [
        "$useMemberContext",
        "$asMemberContext"
    ],
    description: "Loads a member instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "member ID",
            description: "The member to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0
        }
    ],
    execute(ctx, [, m ]) {
        ctx.obj = m
        return this.success()
    },
})