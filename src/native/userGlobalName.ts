import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userGlobalName",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the global name of a user",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its global name",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    async execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.globalName)
    },
})
