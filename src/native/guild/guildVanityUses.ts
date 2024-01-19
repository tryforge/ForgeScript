import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildVanityUses",
    version: "1.0.0",
    description: "Returns the guilds vanity uses",
    unwrap: true,
    aliases: [
        "$serverVanityUses"
    ],
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to return its vanity uses",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [guild]) {
        guild ??= ctx.guild!
        const vanity = await guild?.fetchVanityData().catch(ctx.noop)
        return this.success(vanity ? vanity.uses : undefined)
    },
})
