import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildBotCount",
    version: "1.0.0",
    description: "Returns the bot count of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve bot count from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild ??= ctx.guild!
        return Return.success(guild?.members.cache.filter((x) => x.user.bot).size)
    },
})
