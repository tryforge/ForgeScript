import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isGuildDeaf",
    version: "1.0.0",
    description: "Returns whether a member is server deafened",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get its voice state",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.voice.serverDeaf ?? false)
    },
})
