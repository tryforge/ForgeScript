import { MessageType } from "discord.js"
import { Arg, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    args: [
        Arg.requiredEnum(MessageType)
    ],
    execute(ctx, args) {
        return this.success()
    },
})