import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildApproximatePresenceCount",
    version: "1.3.0",
    description: "Returns the approximated presence count",
    brackets: false,
    aliases: [
        "$serverApproximatePresenceCount"
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
    output: ArgType.Number,
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.approximatePresenceCount ?? 0)
    },
})
