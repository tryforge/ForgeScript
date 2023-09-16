import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageID",
    version: "1.0.0",
    description: "Returns the message id",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.message?.id)
    },
})
