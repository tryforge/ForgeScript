import { APIInteractionGuildMember, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isBoosting",
    description: "Returns whether this member is boosting",
    version: "1.5.0",
    aliases: [
        "$isBooster",
        "$memberIsBooster",
        "$memberIsBoosting"
    ],
    brackets: false,
    unwrap: true,
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
            description: "The user to check boost status for",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(!!(member instanceof GuildMember ? member?.premiumSince : (ctx.interaction?.member as APIInteractionGuildMember)?.premium_since))
    },
})