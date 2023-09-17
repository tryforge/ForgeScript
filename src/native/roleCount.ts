import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleCount",
    version: "1.0.0",
    description: "Returns the role count of all servers",
    unwrap: true,
    execute(ctx) {
        return Return.success(ctx.client.guilds.cache.reduce((x, y) => x + y.roles.cache.size, 0))
    },
})
