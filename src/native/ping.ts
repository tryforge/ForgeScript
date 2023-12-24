import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ping",
    version: "1.0.0",
    description: "Returns the current bot ping",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.ws.ping)
    },
})
