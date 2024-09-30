import { Embed, EmbedBuilder } from "discord.js"
import { EmbedProperties, EmbedProperty } from "../../properties/embed"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$targetMessageEmbeds",
    version: "1.5.0",
    description: "Retrieves data of embeds from the target message",
    aliases: ["$targetMessageEmbed"],
    unwrap: true,
    brackets: false,
    args: [
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
            description: "The index of the field to get",
            rest: false,
            type: ArgType.Number
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [index, prop, fieldIndex]) {
        if (!ctx.interaction?.isMessageContextMenuCommand()) return this.success()

        const message = ctx.interaction.targetMessage
        if (typeof index !== "number") {
            return this.successJSON(message.embeds.map(x => x.data))
        }
        
        const embed = message.embeds[index] as Embed | undefined
        if (prop === null) {
            return this.successJSON(embed)
        }

        return this.success(EmbedProperties[prop](embed ? EmbedBuilder.from(embed) : undefined, undefined, fieldIndex))
    },
})