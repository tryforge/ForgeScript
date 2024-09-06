import { APIEmbed, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadEmbeds",
    version: "1.4.0",
    aliases: [
        "$loadEmbed",
        "$cloneEmbed",
        "$cloneEmbeds",
    ],
    description: "Loads embed json (or array) to the response",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "embed data",
            type: ArgType.Json,
            rest: false,
            required: true,
            description: "The embed object or array of objects to load"
        }
    ],
    execute(ctx, [ json ]) {
        if (Array.isArray(json)) {
            ctx.container.embeds.push(...json.map(x => EmbedBuilder.from(x as APIEmbed)))
        } else {
            ctx.container.embeds.push(EmbedBuilder.from(json as APIEmbed))
        }

        return this.success()
    },
})