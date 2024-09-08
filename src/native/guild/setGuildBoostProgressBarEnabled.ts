import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildBoostProgressBarEnabled",
    version: "1.5.0",
    description: "Sets a guild boost progress bar, returns bool",
    aliases: [
        "$setServerBoostProgressBarEnabled"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to enable/disable boost progress bar on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "enabled",
            description: "Whether to enable the boost progress bar",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        },
        {
            name: "reason",
            description: "The reason for enabling/disabling boost progress bar",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, enabled, reason]) {
        return this.success((await guild.setPremiumProgressBarEnabled(enabled, reason || undefined).catch(() => false)) !== false)
    },
})