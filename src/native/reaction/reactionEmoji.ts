import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionEmoji",
    version: "1.0.0",
    description: "Returns the emoji that was used",
    unwrap: true,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.toString())
    },
})
