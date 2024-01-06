import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildBanReason",
    version: "1.4.0",
    unwrap: true,
    brackets: true,
    aliases: [
        "$serverBanReason",
        "$getBanReason",
        "$getGuildBanReason",
        "$getServerBanReason"
    ],
    output: ArgType.String,
    description: "Fetches a ban reason of a user",
    args: [
        {
            name: "guild ID",
            description: "The guild to pull ban from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            description: "The user to pull ban reason",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ g, u ]) {
        const ban = await g.bans.fetch(u).catch(noop)
        return this.success(ban ? ban.reason : null)
    },
})