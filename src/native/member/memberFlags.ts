import { GuildMemberFlags, GuildMemberFlagsBitField } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$memberFlags",
    version: "1.5.0",
    description: "Returns the flags of a member",
    brackets: false,
    unwrap: true,
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
            pointer: 0,
            description: "The user to get its flags",
            rest: false,
            type: ArgType.Member,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    output: array(GuildMemberFlags),
    execute(ctx, [, user, sep]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(new GuildMemberFlagsBitField(member?.flags).toArray().join(sep ?? ", "))
    },
})