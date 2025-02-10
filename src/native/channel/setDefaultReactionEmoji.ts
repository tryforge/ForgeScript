import { BaseChannel, DefaultReactionEmoji, parseEmoji, ThreadOnlyChannel } from "discord.js"
import { ArgType, CompiledFunction, Context, NativeFunction } from "../../structures"

function parseDefaultReactionEmoji(ctx: Context, str: string | null): DefaultReactionEmoji | null {
    if (!str) return null

    const parsed = parseEmoji(str)
    const id = CompiledFunction.CDNIdRegex.exec(str)?.[2] ?? parsed?.id
    const emoji = ctx.client.emojis.cache.get(id ?? str) ?? parsed
    
    return emoji ? { id: emoji.id ?? null, name: emoji.id ? null : emoji.name } : null
}

export default new NativeFunction({
    name: "$setDefaultReactionEmoji",
    version: "2.2.0",
    description: "Sets a forum's default reaction emoji for posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly()
        },
        {
            name: "emoji",
            description: "The new default reaction emoji",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "Reason for modifying default emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan, emoji, reason ]) {
        return this.success(!!(await (chan as ThreadOnlyChannel).setDefaultReactionEmoji(parseDefaultReactionEmoji(ctx, emoji), reason || undefined).catch(ctx.noop)))
    },
})