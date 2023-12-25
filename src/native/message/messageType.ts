import { MessageType } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageType",
    category: "message",
    version: "1.0.0",
    description: "Returns the message type",
    unwrap: false,
    execute(ctx) {
        return this.success(MessageType[ctx.message?.type!])
    },
})
