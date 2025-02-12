import { BaseChannel, ChannelType, ForumChannel, ForumLayoutType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setDefaultForumLayout",
    version: "2.2.0",
    description: "Sets a forum's default layout of posts",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to modify",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildForum,
        },
        {
            name: "layout",
            description: "The new default layout",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: ForumLayoutType
        },
        {
            name: "reason",
            description: "Reason for modifying default layout",
            rest: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ chan, layout, reason ]) {
        return this.success(!!(await (chan as ForumChannel).setDefaultForumLayout(layout, reason || undefined).catch(ctx.noop)))
    },
})