import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new NativeFunction({
    name: "$inviterCode",
    version: "1.0.3",
    description: "Returns the invite code that was used by this person",
    unwrap: true,
    brackets: false,
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
            description: "The member to get its invite code",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0
        },
    ],
    output: ArgType.Invite,
    execute(ctx, [guild, user]) {
        return this.success(InviteTracker.Inviters.get(guild?.id ?? ctx.guild?.id)?.get(user?.id ?? ctx.user?.id)?.code)
    },
})