import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botID",
    description: "Returns the client's id",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.client.user.id)
    },
})