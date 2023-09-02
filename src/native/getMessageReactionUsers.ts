import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$getMessageReactionUsers",
    version: "1.0.0",
    description: "Gets the user ids that have reacted to a specific emoji",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to get emoji users from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        },
        {
            name: "emoji",
            description: "The emoji to get its users",
            required: true,
            pointer: 1,
            rest: false,
            type: ArgType.Reaction
        },
        {
            name: "separator",
            description: "The separator to use for every user",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, message, reaction, sep ]) {
        const users = new Array<string>()

        let afterID: undefined | string = undefined
        
        if (reaction.users.cache.size <= reaction.count) {
            for (;;) {
                const bulk = await reaction.users.fetch({
                    limit: 100,
                    after: afterID 
                })
    
                if (!bulk.size) break
                afterID = bulk.last()?.id
                users.push(...bulk.map(x => x.id))
            }
        }

        return Return.success(
            users.join(sep || ", ")
        )
    },
})