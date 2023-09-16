import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export const ChannelMentionCharRegex = /[<>#]/g

export default new NativeFunction({
    name: "$findGuildChannel",
    version: "1.0.0",
    description: "Finds a channel of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the channel on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "return channel",
            description: "Returns the current channel id if none found",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, q, rt]) {
        const id = q.replace(ChannelMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const ch = guild.channels.cache.get(id)
            if (ch) return Return.success(ch.id)
        }

        q = q.toLowerCase()
        return Return.success(
            guild.channels.cache.find((x) => x.id === id || x.name.toLowerCase() === q)?.id ??
                (rt ? ctx.channel?.id : undefined)
        )
    },
})
