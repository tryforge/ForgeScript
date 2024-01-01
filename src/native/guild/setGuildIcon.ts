import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildIcon",
    version: "1.0.0",
    description: "Sets a guild icon, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerIcon"
    ],
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
    ],
    brackets: true,
    async execute(_, [guild, icon]) {
        return this.success((await guild.setIcon(icon || null).catch(() => false)) !== false)
    },
})
