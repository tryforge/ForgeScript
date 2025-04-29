import { parseEmoji } from "discord.js"
import { CompiledFunction, Context } from "../structures"

export function parseSingleEmoji(ctx: Context, str: string | null) {
    if (!str) return null

    const parsed = parseEmoji(str)
    const id = CompiledFunction.CDNIdRegex.exec(str)?.[2] ?? parsed?.id
    const emoji = ctx.client.emojis.cache.get(id ?? str) ?? parsed
    
    return emoji ? { id: emoji.id ?? null, name: emoji.id ? null : emoji.name } : null
}