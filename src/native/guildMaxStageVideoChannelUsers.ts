import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildMaxStageVideoChannelUsers",
    category: "unknown",
    version: "1.3.0",
    description: "Returns the maximum video channel users for stage channels of this guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.maxStageVideoChannelUsers)
    },
})
