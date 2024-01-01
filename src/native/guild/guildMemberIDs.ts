import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildMemberIDs",
    version: "1.4.0",
    aliases: [
        "$memberIDs",
        "$serverMemberIDs"
    ],
    description: "Returns all cached member ids of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to pull members from"
        },
        {
            name: "separator",
            description: "The separator to use for each member",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ g, sep ]) {
        g ??= ctx.guild!
        return this.success(g?.members.cache.map(x => x.id).join(sep ?? ", "))
    },
})