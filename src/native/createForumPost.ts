import { BaseChannel, ChannelType, ForumChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createForumPost",
    category: "unknown",
    version: "1.0.0",
    description: "Creates a forum post, returns the post channel id",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildForum,
            description: "The channel to create a post on",
        },
        {
            name: "title",
            description: "The post title",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The post description",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, title, desc, tags]) {
        const forum = channel as ForumChannel

        ctx.container.content = desc || undefined

        const t = await forum.threads
            .create({
                appliedTags: tags,
                name: title,
                message: ctx.container.getOptions(),
            })
            .catch(noop)

        ctx.container.reset()

        return this.success(t ? t.id : undefined)
    },
})
