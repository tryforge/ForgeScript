import { APIInteractionGuildMember, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isTimedOut",
    version: "1.0.0",
    description: "Whether an member is timed out",
    unwrap: true,
    brackets: false,
    aliases: [
        "$memberIsTimedOut"
    ],
    output: ArgType.Boolean,
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
            description: "The member to check for timeout",
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
                ? member?.isCommunicationDisabled() ?? false
                : !!(ctx.interaction?.member as APIInteractionGuildMember)?.communication_disabled_until
        )
    },
})