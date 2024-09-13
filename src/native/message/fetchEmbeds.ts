import { BaseChannel, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$fetchEmbeds",
    version: "1.4.0",
    aliases: [
        "$fetchEmbed",
        "$cloneEmbed",
        "$cloneEmbeds"
    ],
    description: "Fetches an embed or all embeds from a message to the next response",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to get embeds from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The embed index to load",
            rest: false,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ , msg, index ]) {
        msg ??= ctx.message!
        const embeds = msg?.embeds
        
        if (embeds === undefined)
            return this.success()
        
        if (typeof index === "number") {
            const embed = embeds[index]
            if (!embed)
                return this.success()
            ctx.container.embeds.push(EmbedBuilder.from(embed))
            return this.success()
        }

        ctx.container.embeds.push(...embeds.map(x => EmbedBuilder.from(x)))
        return this.success()
    },
})