import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberBoostingSince",
    version: "1.5.0",
    aliases: [
        "$boostingSince",
        "$boosterSince",
        "$memberBoosterSince",
    ],
    brackets: false,
    unwrap: true,
    output: ArgType.Number,
    description: "Returns when the member started boosting the guild",
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
            description: "The user to check boost status for",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.premiumSinceTimestamp || 0)
    },
})