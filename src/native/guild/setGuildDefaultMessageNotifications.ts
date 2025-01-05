import { GuildDefaultMessageNotifications } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildDefaultMessageNotifications",
    version: "2.1.0",
    description: "Sets the default message notifications setting for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerDefaultMessageNotifications"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set default message notifications for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "setting",
            description: "The new default message notifications setting",
            rest: false,
            type: ArgType.Enum,
            enum: GuildDefaultMessageNotifications
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, setting, reason]) {
        return this.success((await guild.setDefaultMessageNotifications(setting || null, reason || undefined).catch(() => false)) !== false)
    },
})