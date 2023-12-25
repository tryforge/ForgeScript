import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$uptime",
    category: "bot",
    version: "1.0.0",
    description: "Returns the bots uptime",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.uptime)
    },
})
