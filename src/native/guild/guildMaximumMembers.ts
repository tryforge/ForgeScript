import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildMaximumMembers",
    version: "1.3.0",
    description: "Returns the maximum members for this guild",
    brackets: false,
    aliases: [
        "$serverMaximumMembers"
    ],
    output: ArgType.Number,
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
        return this.success((guild ?? ctx.guild)?.maximumMembers)
    },
})
