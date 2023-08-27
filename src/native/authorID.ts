import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return, ReturnType } from "../structures/Return"

export default new NativeFunction({
    name: "$authorID",
    description: "Retrieves an user's id.",
    unwrap: true,
    execute: async function(ctx) {
        console.log("hi")
        return Return.success(ctx.user?.id)
    }
})