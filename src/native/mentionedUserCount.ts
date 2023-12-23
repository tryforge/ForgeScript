import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentionedUserCount",
    version: "1.3.0",
    description: "Returns the mentioned user count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.users.size)
    },
})
