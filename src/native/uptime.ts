import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$uptime",
    description: "Returns the bots uptime",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.client.uptime)
    },
})