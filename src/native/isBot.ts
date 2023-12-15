import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isBot",
    version: "1.0.0",
    description: "Returns whether the user is a bot",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to check whether its a bot",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    execute(ctx, [user]) {
        return this.success(Boolean((user ?? ctx.user)?.bot))
    },
})
