import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildBanner",
    version: "1.0.0",
    description: "Sets a guild banner, returns boolean",
    unwrap: true,
    aliases: [
        "$setServerBanner"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set banner on",
        },
        {
            name: "url",
            description: "The new banner",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(_, [guild, banner]) {
        return this.success((await guild.setBanner(banner || null).catch(() => false)) !== false)
    },
})
