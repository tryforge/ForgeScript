import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$banMember",
    description: "Bans a member from the guild, returns true or false depending on whether the action was successfully performed.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to ban a member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            description: "The ban to kick",
            rest: false,
            type: ArgType.Member,
            required: true
        },
        {
            name: "reason",
            description: "The reason to kick for",
            rest: false,
            type: ArgType.String
        },
        {
            name: "delete message seconds",
            description: "Delete messages from this member that were sent in this seconds time span",
            rest: false,
            type: ArgType.Number
        }
    ],
    async execute(ctx, [ guild, member, reason, seconds ]) {
        return Return.success(
            await member.ban({
                reason: reason || undefined,
                deleteMessageSeconds: seconds || undefined
            }).catch(() => false) !== false
        )
    },
})