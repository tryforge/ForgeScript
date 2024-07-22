import { BaseChannel, ChannelType, ForumChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$modifyForumTags",
    version: "1.5.0",
    description: "Modifiers a forum's tags, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
            description: "The forum to edit tags on",
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
    async execute(ctx, [channel, tags]) {
        const forum = channel as ThreadChannel

        return this.success(!!(await forum.setAppliedTags(tags).catch(ctx.noop)))
    },
})
