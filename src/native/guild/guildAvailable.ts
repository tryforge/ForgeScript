import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildAvailable",
    version: "1.3.0",
    description: "Returns whether the server is available",
    brackets: false,
    aliases: [
        "$serverAvailable"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Boolean,
    unwrap: true,
    execute(ctx, [guild]) {
        guild.maximumBitrate
        return this.success((guild ?? ctx.guild)?.available)
    },
})
