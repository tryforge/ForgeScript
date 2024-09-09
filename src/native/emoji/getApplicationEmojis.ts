import { ApplicationEmojiProperties, ApplicationEmojiProperty } from "../../properties/applicationEmoji"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getApplicationEmojis",
    version: "1.5.0",
    description: "Gets all application emojis",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to return for every emoji",
            rest: false,
            type: ArgType.Enum,
            enum: ApplicationEmojiProperty
        },
        {
            name: "separator",
            description: "The separator to use for every emoji property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    async execute(ctx, [prop, sep]) {
        const emojis = await ctx.client.application.emojis.fetch().catch(ctx.noop)
        return this.successJSON(!prop ? emojis : emojis?.map(emoji => ApplicationEmojiProperties[prop](emoji)).join(sep ?? ", "))
    },
})