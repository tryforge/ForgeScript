import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionMessageID",
    category: "unknown",
    version: "1.0.0",
    description: "The message id of the reacted message",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.message.id)
    },
})
