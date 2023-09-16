import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botCount",
    version: "1.0.0",
    description: "Returns the bot count of the bot",
    unwrap: true,
    execute(ctx) {
        return Return.success(ctx.client.users.cache.filter((x) => x.bot).size)
    },
})
