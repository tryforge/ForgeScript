import { BaseChannel, Embed, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import { MessageProperties, MessageProperty } from "../properties/message"
import { EmbedProperties, EmbedProperty } from "../properties/embed"

export default new NativeFunction({
    name: "$getEmbed",
    version: "1.0.3",
    description: "Retrieves data of an embed",
    unwrap: true,
    brackets: true,
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
            required: true,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: EmbedProperty,
            required: true,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, m, index, prop, sep]) {
        const embed = m.embeds[index] as Embed | undefined
        return Return.success(EmbedProperties[prop](embed ? EmbedBuilder.from(embed) : undefined, sep || ", "))
    },
})
