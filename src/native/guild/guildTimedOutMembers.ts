import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildTimedOutMembers",
    version: "1.5.0",
    description: "Returns all current timed out members of a guild",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverTimedOutMembers"
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
    async execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild).members.cache.filter(m => m.isCommunicationDisabled()).map(member => member.id).join(sep ?? ", "))
    },
})