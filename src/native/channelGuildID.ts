import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelGuildID",
    description: "Returns the channel guild id",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: ArgType.Channel,
            required: true
        }
    ],
    execute(ctx, [ ch ]) {
        const chan = ch ?? ctx.channel
        return Return.success(
            "guildId" in chan ? chan.guildId : undefined
        )
    },
})