import { BaseChannel, Embed, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { EmbedProperties, EmbedProperty } from "../../properties/embed"

export default new NativeFunction({
    name: "$getEmbeds",
    version: "1.0.3",
    description: "Retrieves data of an embed, not providing any property returns embed json",
    unwrap: true,
    output: ArgType.Unknown,
    brackets: false,
    aliases: [
        "$getEmbed"
    ],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "embed index",
            description: "The embed index to get data from",
            rest: false,
            required: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: EmbedProperty,
            required: false,
        },
        {
            name: "field index",
            description: "Index of field to get",
            rest: false,
            type: ArgType.Number
        },
    ],
    execute(ctx, [, m, index, prop, fieldIndex]) {
        if (typeof index !== "number") {
            return this.successJSON((m ?? ctx.message)?.embeds.map(x => x.data))
        }
        
        const embed = m.embeds[index] as Embed | undefined
        if (prop === null) {
            return this.successJSON(embed)
        }

        return this.success(EmbedProperties[prop](embed ? EmbedBuilder.from(embed) : undefined, undefined, fieldIndex))
    },
})
