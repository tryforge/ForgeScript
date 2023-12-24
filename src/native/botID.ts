import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botID",
    category: "unknown",
    version: "1.0.0",
    description: "Returns the client's id",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.user.id)
    },
})
