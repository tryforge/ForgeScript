import { BaseChannel, ChannelType, Guild, NewsChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$followChannel",
    version: "2.3.0",
    description: "Follows given announcement channel, returns webhook id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to follow",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildAnnouncement,
        },
        {
            name: "channel ID",
            description: "The channel to crosspost messages in",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => i.type === ChannelType.GuildText,
        },
        {
            name: "reason",
            description: "The reason for following the channel",
            type: ArgType.String,
            rest: false,
        }
    ],
    output: ArgType.Webhook,
    async execute(ctx, [news, chan, reason]) {
        return this.success("guild" in news ? (await (news.guild as Guild)?.channels.addFollower(news as NewsChannel, chan as TextChannel, reason || undefined).catch(ctx.noop)) : undefined)
    },
})