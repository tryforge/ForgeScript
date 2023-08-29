import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberJoinedAt",
    description: "Returns the timestamp the member joined at",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "user ID",
            description: "The user to get its join date",
            rest: false,
            type: ArgType.Member,
            required: true
        }
    ],
    execute(ctx, [ guild, member ]) {
        member ??= ctx.member!
        return Return.success(member?.joinedTimestamp)
    },
})