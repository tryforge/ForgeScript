import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildIcon",
    version: "1.0.0",
    description: "Sets a guild icon, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerIcon"
    ],
    output: ArgType.URL,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set icon on",
        },
        {
            name: "url",
            description: "The new icon",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for this action",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [guild, icon, reason]) {
        return this.success((await guild.setIcon(icon || null, reason || undefined).catch(() => false)) !== false)
    },
})