import { GuildVerificationLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildVerificationLevel",
    version: "1.3.0",
    description: "Returns the server verification level",
    brackets: false,
    aliases: [
        "$serverVerificationLevel"
    ],
    output: GuildVerificationLevel,
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
        return this.success(GuildVerificationLevel[(guild ?? ctx.guild)?.verificationLevel])
    },
})
