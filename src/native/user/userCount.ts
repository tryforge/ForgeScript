import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userCount",
    version: "1.0.0",
    description: "Returns the user count of the bot",
    unwrap: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.reduce((x, y) => x + (y.memberCount || 0), 0))
    },
})
