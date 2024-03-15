import { BaseChannel, CategoryChannel, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$channelIsChildrenOf",
    version: "1.5.0",
    aliases: [
        "$isChildrenOf"
    ],
    description: "Checks whether given channel is a children of a category",
    output: ArgType.Boolean,
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to know if is children of category",
            rest: false,
            type: ArgType.Channel,
            required: true
        },
        {
            name: "category ID",
            description: "The category to check against",
            rest: false,
            type: ArgType.Channel,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory
        }
    ],
    execute(ctx, [ ch, cat ]) {
        return this.success((cat as CategoryChannel).children.cache.has(ch.id))
    },
})