import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildFeatures",
    category: "guild",
    version: "1.0.0",
    description: "Returns the guild features",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.features.join(sep || ", "))
    },
})
