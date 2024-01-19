import { MessageType } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$messageType",
    version: "1.0.0",
    description: "Returns the message type",
    unwrap: false,
    output: MessageType,
    execute(ctx) {
        return this.success(MessageType[ctx.message?.type!])
    },
})
