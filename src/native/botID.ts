import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botID",
    version: "1.0.0",
    description: "Returns the client's id",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.client.user.id)
    },
})
