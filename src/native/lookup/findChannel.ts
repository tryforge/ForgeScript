import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"
import { ChannelMentionCharRegex } from "./findGuildChannel"

export default new NativeFunction({
    name: "$findChannel",
    category: "lookup",
    version: "1.0.0",
    description: "Finds a channel",
    brackets: true,
    args: [
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
    execute(ctx, [q, rt]) {
        const id = q.replace(ChannelMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const ch = ctx.client.channels.cache.get(id)
            if (ch) return this.success(ch.id)
        }

        const rtId = rt ? ctx.channel?.id || undefined : undefined

        q = q.toLowerCase()

        return this.success(
            ctx.client.channels.cache.find(
                (x) => x.id === id || ("name" in x && (x.name as string).toLowerCase() === q)
            )?.id ?? rtId
        )
    },
})
