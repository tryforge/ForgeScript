import { BaseChannel, ChannelType, ForumChannel, ForumLayoutType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$forumDefaultLayout",
    version: "2.2.0",
    description: "Returns the default layout of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default layout from",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildForum,
            required: true
        },
    ],
    output: ForumLayoutType,
    execute(ctx, [chan]) {
        return this.success(ForumLayoutType[(chan as ForumChannel)?.defaultForumLayout])
    },
})