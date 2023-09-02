import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionEmojiID",
    description: "The reaction id that was used",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.reaction?.emoji.id
        )
    }
})