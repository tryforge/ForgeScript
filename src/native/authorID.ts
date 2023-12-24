import { NativeFunction } from "../structures/@internal/NativeFunction"
import { Return } from "../structures/@internal/Return"

export default new NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    description: "Retrieves a user's id",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.user?.id)
    },
})
