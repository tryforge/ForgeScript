import { APIInteractionGuildMember, GuildMember } from "discord.js"
import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberRoles",
    version: "1.0.0",
    description: "Returns the role ids of a member",
    unwrap: true,
    brackets: false,
    output: array<ArgType.Role>(),
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
            description: "The user to get roles from",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, user, sep]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        return this.success(
            (member instanceof GuildMember
                ? member?.roles.cache.filter((x) => x.id !== x.guild.id).map((x) => x.id)
                : (ctx.interaction?.member as APIInteractionGuildMember)?.roles
            )?.join(sep || ", ")
        )
    },
})