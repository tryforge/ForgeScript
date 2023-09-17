import { NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    description: "Retrieves an user's id",
    unwrap: true,
    execute: async function (ctx) {
        return Return.success(ctx.user?.id)
    },
})
