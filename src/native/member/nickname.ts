import { APIInteractionGuildMember, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$nickname",
    version: "1.0.0",
    description: "Returns the member nickname",
    brackets: false,
    aliases: ["$memberNickname"],
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to return its nickname",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(member instanceof GuildMember ? member?.nickname : (ctx.interaction?.member as APIInteractionGuildMember)?.nick)
    },
})