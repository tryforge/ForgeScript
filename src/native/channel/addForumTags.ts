import { BaseChannel, ChannelType, ForumChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$addForumTags",
    version: "1.5.0",
    aliases: ["$addPostTags"],
    description: "Adds tags to a forum post, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
            description: "The post to edit tags on",
        },
        {
            name: "reason",
            description: "The reason for adding post tags",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: ArgType.String,
        }
    ],
    brackets: true,
    async execute(ctx, [ channel, reason, tags ]) {
        const post = channel as ThreadChannel

        return this.success(!!(await post.setAppliedTags(tags, reason || undefined).catch(ctx.noop)))
    },
})