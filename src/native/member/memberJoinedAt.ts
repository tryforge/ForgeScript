import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberJoinedAt",
    version: "1.0.0",
    description: "Returns the timestamp the member joined at",
    unwrap: true,
    brackets: false,
    output: ArgType.Number,
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
            description: "The user to get its join date",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.joinedTimestamp)
    },
})
