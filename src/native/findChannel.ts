import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"
import { ChannelMentionCharRegex } from "./findGuildChannel"

export default new NativeFunction({
    name: "$findChannel",
    version: "1.0.0",
    description: "Finds a channel",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ q ]) {
        const id = q.replace(ChannelMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const ch = ctx.client.channels.cache.get(id)
            if (ch) return Return.success(ch.id)
        }

        q = q.toLowerCase()

        return Return.success(
            ctx.client.channels.cache.find(
                x => x.id === id || ("name" in x && (x.name as string).toLowerCase() === q)
            )?.id
        )
    },
})