import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { Collection, GuildMember } from "discord.js"

export default new NativeFunction({
    name: "$channelMembers",
    version: "1.5.0",
    description: "Returns the members of a channel",
    unwrap: true,
    output: array<ArgType.String>(),
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its members",
            rest: false,
            required: true,
            type: ArgType.Channel,
        },
        {
            name: "separator",
            description: "The separator to use for each member",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [ch, sep]) {
        const chan = ch ?? ctx.channel
        return this.successJSON("members" in chan ? (chan.members as Collection<string, GuildMember>)?.map(member => member.id).join(sep ?? ", ") : null)
    },
})