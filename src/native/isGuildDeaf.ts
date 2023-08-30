import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isGuildDeaf",
    description: "Whether a member is server deafened",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "user ID",
            description: "The member to get its voice state",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [ guild, member ]) {
        member ??= ctx.member!
        return Return.success(
            member?.voice.serverDeaf ?? false
        )
    },
})