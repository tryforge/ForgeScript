import { parseEmoji } from "discord.js"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$findEmoji",
    version: "1.0.0",
    description: "Finds an emoji",
    brackets: true,
    output: ArgType.Emoji,
    args: [
        {
            name: "query",
            description: "The id, format or emoji name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    async execute(ctx, [q]) {
        const parsed = parseEmoji(q)

        if (CompiledFunction.IdRegex.test(q)) {
            const e = ctx.client.emojis.cache.get(q) || await ctx.client.application.emojis.fetch(q).catch(ctx.noop)
            if (e) return this.success(e.id)
        }

        const name = parsed?.name.toLowerCase()

        return this.success(
            ctx.client.emojis.cache.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id || (await ctx.client.application.emojis.fetch().catch(ctx.noop))?.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id
        )
    },
})