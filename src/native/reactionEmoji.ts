import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionEmoji",
    description: "The emoji that was used",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.reaction?.emoji.toString()
        )
    }
})