import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botToken",
    version: "1.0.0",
    description: "Returns the client token",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.client.token)
    },
})