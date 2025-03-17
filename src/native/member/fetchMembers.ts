import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchMembers",
    version: "1.0.0",
    description: "Caches all members of a guild",
    aliases: ["$fetchMember"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache members of",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to fetch",
            rest: false,
            type: ArgType.Member,
            pointer: 0
        },
    ],
    async execute(ctx, [guild, member]) {
        guild ??= ctx.guild!
        if (member) await guild?.members.fetch(member)
        else await guild?.members.fetch()
        return this.success()
    },
})