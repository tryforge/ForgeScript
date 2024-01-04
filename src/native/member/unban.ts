import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$unban",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    description: "Unbans a user",
    args: [
        {
            name: "guild ID",
            description: "The guild to unban a user from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to unban",
            rest: false,
            type: ArgType.User,
            required: true,
        },
        {
            name: "reason",
            description: "The unban reason",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, user, reason]) {
        const unbanned = await guild.bans.remove(user, reason || undefined).catch(noop)
        return this.success(!!unbanned)
    },
})
