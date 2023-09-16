import { ChannelType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildRoleCount",
    version: "1.0.0",
    description: "Returns the role count of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get roles from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
    ],
    execute(ctx, [guild]) {
        guild ??= ctx.guild!
        return Return.success(guild.roles.cache.size)
    },
})
