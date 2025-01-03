import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildAFKTimeout",
    version: "2.1.0",
    description: "Sets the AFK timeout for a guild, returns bool",
    unwrap: true,
    aliases: [
        "$setServerAFKTimeout"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to set AFK timeout for",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "seconds",
            description: "The new AFK timeout in seconds (60, 300, 900, 1800, 3600)",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, seconds, reason]) {
        return this.success((await guild.setAFKTimeout(seconds, reason || undefined).catch(() => false)) !== false)
    },
})