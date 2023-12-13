import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberDisplayColor",
    version: "1.0.0",
    description: "Returns the display color of a member",
    unwrap: true,
    brackets: false,
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
            description: "The user to get its color",
            rest: false,
            type: ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        member ??= ctx.member!
        return this.success(member?.displayHexColor)
    },
})
