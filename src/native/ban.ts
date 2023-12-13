import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ban",
    version: "1.0.0",
    description:
        "Bans a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to ban a member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to ban",
            rest: false,
            type: ArgType.User,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to ban for",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "delete message seconds",
            description: "Delete messages from this member that were sent in this seconds time span",
            rest: false,
            type: ArgType.Number,
        },
    ],
    async execute(_, [guild, user, reason, seconds]) {
        return this.success(
            (await guild.members
                .ban(user, {
                    reason: reason || undefined,
                    deleteMessageSeconds: seconds || undefined,
                })
                .catch(() => false)) !== false
        )
    },
})
