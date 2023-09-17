import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$username",
    version: "1.0.0",
    description: "Retrieves an user's username",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The user id to get the username of",
            type: ArgType.User,
            rest: false,
        },
    ],
    unwrap: true,
    execute: async function (ctx, [user]) {
        user ??= ctx.user // < No bracket support
        return Return.success(user?.username)
    },
})
