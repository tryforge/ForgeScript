import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageID",
    description: "Returns the message id",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.message?.id)
    },
})