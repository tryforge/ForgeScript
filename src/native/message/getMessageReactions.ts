import { ReactionProperties, ReactionProperty } from "../../properties/reaction"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$getMessageReactions",
    version: "2.2.0",
    description: "Retrieves all reactions of a message",
    aliases: ["$getReactions"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to retrieve reactions from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the reactions to return",
            rest: false,
            type: ArgType.Enum,
            enum: ReactionProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    async execute(ctx, [, message, prop, sep]) {
        const reactions = (await (message ?? ctx.message)?.fetch().catch(ctx.noop))?.reactions.cache
        return this.success(reactions?.map(reaction => ReactionProperties[prop || ReactionProperty.emoji](reaction, sep)).join(sep ?? ", "))
    },
})