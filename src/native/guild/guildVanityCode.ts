import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildVanityCode",
    version: "1.0.0",
    description: "Returns the guilds vanity code",
    unwrap: true,
    aliases: [
        "$serverVanityCode"
    ],
    output: ArgType.Invite,
    args: [
        {
            name: "guild ID",
            description: "The guild to return its vanity code",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [guild]) {
        guild ??= ctx.guild!
        return this.success(guild?.vanityURLCode ?? (await guild?.fetchVanityData().catch(ctx.noop))?.code)
    },
})