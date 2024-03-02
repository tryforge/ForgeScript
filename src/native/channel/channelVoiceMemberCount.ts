import { TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelVoiceMemberCount",
    version: "1.4.0",
    description: "Returns the member count that are connected to this voice channel",
    unwrap: true,
    aliases: [
        "$channelMemberCount"
    ],
    output: ArgType.Number,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true,
        }
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel
        return this.success(chan.isVoiceBased() ? chan.members.size : null)
    },
})
