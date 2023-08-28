import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userCount",
    description: "Returns the user count of the bot",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.client.guilds.cache.reduce((x, y) => x + (y.memberCount || 0), 0)
        )
    }
})