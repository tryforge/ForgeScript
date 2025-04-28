import { APIInteractionGuildMember, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberJoinedAt",
    version: "1.0.0",
    description: "Returns the timestamp the member joined at",
    unwrap: true,
    brackets: false,
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get its join date",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(
            member instanceof GuildMember
                ? member?.joinedTimestamp
                : ("joined_at" in (ctx.interaction?.member ?? {}) ? new Date((ctx.interaction?.member as APIInteractionGuildMember).joined_at).getTime() : null)
        )
    },
})