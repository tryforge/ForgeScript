import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userGlobalName",
    version: "1.0.0",
    description: "Returns the global name of an user",
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
        return Return.success((user ?? ctx.user)?.globalName)
    },
})
