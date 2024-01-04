import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildEmojis",
    version: "1.3.0",
    unwrap: true,
    aliases: [
        "$serverEmojis"
    ],
    output: array<ArgType.String>(),
    brackets: false,
    description: "Returns every emoji of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to get emoji from"
        },
        {
            name: "separator",
            description: "The separator to use for every emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, sep ]) {
        guild ??= ctx.guild!
        return this.success(guild?.emojis.cache.map(x => x.toString()).join(sep ?? ", "))
    },
})