import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forumDefaultReactionEmoji",
    version: "2.2.0",
    description: "Returns the default recation emoji of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default recation emoji from",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            required: true
        },
    ],
    output: ArgType.String,
    execute(ctx, [chan]) {
        const emoji = (chan as ThreadOnlyChannel)?.defaultReactionEmoji
        return this.success(emoji?.id ? ctx.client.emojis.cache.get(emoji.id)?.toString() : emoji?.name)
    },
})