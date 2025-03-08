import { APIInteractionGuildMember, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isDeaf",
    version: "1.0.0",
    description: "Whether a member is deafened",
    brackets: false,
    unwrap: true,
    aliases: [
        "$memberIsDeaf"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get its voice state",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success((member instanceof GuildMember ? member?.voice.deaf : (ctx.interaction?.member as APIInteractionGuildMember)?.deaf) ?? false)
    },
})