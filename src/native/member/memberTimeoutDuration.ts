import { APIInteractionGuildMember, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberTimeoutDuration",
    version: "1.5.0",
    aliases: [
        "$timeoutDuration",
        "$getTimeoutDuration",
        "$timedOutUntil",
        "$memberTimedOutUntil"
    ],
    description: "Returns the timeout duration of a member",
    unwrap: true,
    brackets: false,
    output: ArgType.Number,
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
            description: "The member to get duration for",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(
            member instanceof GuildMember
                ? member?.communicationDisabledUntil?.getTime() ?? 0
                : ("communication_disabled_until" in (ctx.interaction?.member ?? {}) ? new Date((ctx.interaction?.member as APIInteractionGuildMember).communication_disabled_until!).getTime() : 0)
        )
    },
})