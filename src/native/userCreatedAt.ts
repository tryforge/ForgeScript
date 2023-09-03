import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userCreatedAt",
    version: "1.0.0",
    description: "Returns the timestamp this user created their account",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its creation date",
            required: true,
            rest: false,
            type: ArgType.User
        }
    ],
    brackets: false,
    async execute(ctx, [ user ]) {
        return Return.success(
            (user ?? ctx.user)?.createdTimestamp
        )
    },
})