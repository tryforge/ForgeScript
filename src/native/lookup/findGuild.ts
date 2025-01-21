import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$findGuild",
    version: "2.2.0",
    description: "Finds a guild",
    brackets: true,
    output: ArgType.Guild,
    args: [
        {
            name: "query",
            description: "The id or guild name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "return guild",
            description: "Returns the current guild id if none found",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [q, rt]) {
        if (CompiledFunction.IdRegex.test(q)) {
            const guild = ctx.client.guilds.cache.get(q)
            if (guild) return this.success(guild.id)
        }

        return this.success(
            ctx.client.guilds.cache.find((x) => x.id === q || x.name === q)?.id ?? (rt ? ctx.guild?.id : undefined)
        )
    },
})