import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userDefaultAvatar",
    version: "1.5.0",
    description: "Returns the default user avatar",
    brackets: false,
    output: ArgType.URL,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the default avatar",
            rest: false,
            required: true,
            type: ArgType.User,
        },
    ],
    unwrap: true,
    execute(ctx, [user]) {
        return this.success((user ?? ctx.user)?.defaultAvatarURL)
    },
})