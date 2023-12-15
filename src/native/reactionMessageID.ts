import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionMessageID",
    version: "1.0.0",
    description: "Returns the message id of the reacted message",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.message.id)
    },
})
