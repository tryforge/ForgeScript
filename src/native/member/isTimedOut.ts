import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isTimedOut",
    version: "1.0.0",
    description: "Whether an member is timed out",
    unwrap: true,
    brackets: false,
    aliases: [
        "$memberIsTimedOut"
    ],
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
            description: "The member to check for timeout",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.isCommunicationDisabled() ?? false)
    },
})
