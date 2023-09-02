import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reply",
    version: "1.0.0",
    description: "Marks the response as a reply",
    unwrap: false,
    execute(ctx) {

        ctx.container.reply = true
        return Return.success()
    },
})