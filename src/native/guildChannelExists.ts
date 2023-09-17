import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildChannelExists",
    version: "1.0.0",
    description: "Returns whether an guild channel id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to check for the guild channel",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "channel ID",
            description: "The role to guild channel",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, id]) {
        return Return.success(CompiledFunction.IdRegex.test(id) && guild.channels.cache.has(id))
    },
})
