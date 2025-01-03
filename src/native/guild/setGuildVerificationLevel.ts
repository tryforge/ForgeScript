import { GuildVerificationLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildVerificationLevel",
    version: "2.1.0",
    description: "Sets the verification level of a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerVerificationLevel"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set verification level on",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "level",
            description: "The new verification level",
            rest: false,
            type: ArgType.Enum,
            enum: GuildVerificationLevel
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
        return this.success((await guild.setVerificationLevel(level || null, reason || undefined).catch(() => false)) !== false)
    },
})