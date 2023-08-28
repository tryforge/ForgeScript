import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageType",
    description: "Returns the message type",
    unwrap: false,
    execute(ctx) {
        return Return.success(ctx.message?.type)
    },
})