import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$channelNames",
    version: "1.0.0",
    description: "Returns the channel names of a guild",
    brackets: false,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to return the channels of",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each channel",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.channels.cache.map((x) => x.name).join(sep || ", "))
    },
})