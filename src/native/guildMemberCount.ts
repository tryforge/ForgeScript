import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildMemberCount",
    version: "1.0.0",
    description: "Returns the user count of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve member count from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild ??= ctx.guild!
        return this.success(guild?.memberCount)
    },
})
