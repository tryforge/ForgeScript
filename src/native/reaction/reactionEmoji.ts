import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionEmoji",
    version: "1.0.0",
    description: "The emoji that was used",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.toString())
    },
})
