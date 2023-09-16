import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$dmChannelID",
    version: "1.0.0",
    description: "Returns the dm channel id of an user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "User to get the dm channel",
            rest: false,
            required: true,
            type: ArgType.User,
        },
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user!
        const dm = await user?.createDM().catch(noop)
        return Return.success(dm ? dm.id : undefined)
    },
})
