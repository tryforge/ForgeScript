import { parseEmoji } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$findGuilEmoji",
    version: "1.0.0",
    description: "Finds a emoji of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the emoji on",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "query",
            description: "The id, mention or emoji name to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ guild, q ]) {
        const parsed = parseEmoji(q)

        if (CompiledFunction.IdRegex.test(q)) {
            const e = guild.emojis.cache.get(q)
            if (e) return Return.success(e.id)
        }

        const name = parsed?.name.toLowerCase()

        return Return.success(
            guild.channels.cache.find(
                x => x.id === q || x.name.toLowerCase() === q.toLowerCase() || x.toString() === q
            )?.id
        )
    },
})