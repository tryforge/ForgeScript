import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildApproximateMemberCount",
    version: "1.3.0",
    description: "Returns the approximated member count",
    brackets: false,
    aliases: [
        "$serverApproximateMemberCount"
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
        return this.success((guild ?? ctx.guild)?.approximateMemberCount ?? 0)
    },
})
