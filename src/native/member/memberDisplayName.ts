import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberDisplayName",
    version: "2.3.0",
    description: "Returns the display name of a member",
    unwrap: true,
    brackets: false,
    output: ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The user to get its display name",
            rest: false,
            type: ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.displayName)
    },
})