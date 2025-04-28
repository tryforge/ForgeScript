import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$channelVoiceMemberIDs",
    version: "1.4.0",
    description: "Returns the members that are connected to this voice channel",
    unwrap: true,
    aliases: [
        "$channelMemberIDs"
    ],
    output: array<ArgType.Member>(),
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "separator",
            rest: false,
            description: "Separator to use for every id",
            required: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ch, sep]) {
        const chan = ch ?? ctx.channel
        return this.success(chan?.isVoiceBased() ? chan.members.map(x => x.id).join(sep ?? ", ") : null)
    },
})