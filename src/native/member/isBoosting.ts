import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isBoosting",
    version: "1.5.0",
    aliases: [
        "$isBooster",
        "$memberIsBooster",
        "$memberIsBoosting"
    ],
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
    description: "Whether this user is boosting",
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
        return this.success(!!member?.premiumSince)
    },
})