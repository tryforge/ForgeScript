import { GuildMFALevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildMFALevel",
    version: "2.1.0",
    description: "Sets the MFA level for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerMFALevel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set MFA level for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "level",
            description: "The new MFA level",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: GuildMFALevel
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, level, reason]) {
        return this.success((await guild.setMFALevel(level, reason || undefined).catch(() => false)) !== false)
    },
})