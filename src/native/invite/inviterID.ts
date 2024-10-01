import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new NativeFunction({
    name: "$inviterID",
    version: "1.0.3",
    description: "Returns the user who invited this person",
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
            description: "The member to get its inviter",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0
        },
    ],
    output: ArgType.User,
    execute(ctx, [guild, user]) {
        return this.success(InviteTracker.Inviters.get(guild?.id ?? ctx.guild?.id)?.get(user?.id ?? ctx.user?.id)?.inviterId)
    },
})