import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ping",
    description: "The current bot ping",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.client.ws.ping)
    },
})