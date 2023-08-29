import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$unban",
    brackets: true,
    unwrap: true,
    description: "Unbans an user",
    args: [
        {
            name: "guild ID",
            description: "The guild to unban a user from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            description: "The user to unban",
            rest: false,
            type: ArgType.User,
            required: true
        },
        {
            name: "reason",
            description: "The unban reason",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, user, reason ]) {
        const unbanned = await guild.bans.remove(user, reason || undefined).catch(noop)
        return Return.success(!!unbanned) 
    },
})