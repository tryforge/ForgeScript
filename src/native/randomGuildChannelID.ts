import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomGuildChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channel from",
            rest: false,
            required: true,
            type: ArgType.Guild
        }
    ],
    execute(ctx, [ g ]) {
        g ??= ctx.guild!

        return Return.success(
            g?.channels.cache.randomKey()
        )
    },
})