import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionEmojiID",
    version: "1.0.0",
    description: "The reaction id that was used",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.id)
    },
})
