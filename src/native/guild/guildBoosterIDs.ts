import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildBoosterIDs",
    version: "1.5.0",
    description: "Returns all current boosters of a guild",
    brackets: false,
    aliases: [
        "$serverBoosterIDs"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "separator",
            description: "The separator to use for every member",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array<ArgType.Member>(),
    unwrap: true,
    async execute(ctx, [guild, sep]) {
        guild ??= ctx.guild!
        return this.success(guild?.roles.premiumSubscriberRole?.members.map(member => member.id).join(sep ?? ", "))
    },
})