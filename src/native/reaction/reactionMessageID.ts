import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionMessageID",
    version: "1.0.0",
    description: "The message id of the reacted message",
    unwrap: true,
    output: ArgType.Message,
    execute(ctx) {
        return this.success(ctx.reaction?.message.id)
    },
})
