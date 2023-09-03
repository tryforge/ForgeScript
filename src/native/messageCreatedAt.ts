import { MessageType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$messageCreatedAt",
    version: "1.0.0",
    description: "Returns the timestamp of the message",
    unwrap: false,
    execute(ctx) {
        return Return.success(MessageType[ctx.message?.createdTimestamp!])
    },
})