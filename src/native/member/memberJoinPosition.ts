import { Guild, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberJoinPosition",
    version: "1.5.0",
    description: "Returns the position at which the member joined the guild",
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
            description: "The user to get its join position",
            rest: false,
            pointer: 0,
            type: ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [guild, member]) {
        member ??= ctx.member!
        return this.success([...(guild ?? ctx.guild).members.cache.sort((a, b) => a.joinedTimestamp! - b.joinedTimestamp!).values()].findIndex(x => x.id === member.id) + 1)
    },
})