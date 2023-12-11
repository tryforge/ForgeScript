import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildExists",
    version: "1.0.0",
    description: "Returns whether a guild id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return Return.success(CompiledFunction.IdRegex.test(id) && ctx.client.guilds.cache.has(id))
    },
})
