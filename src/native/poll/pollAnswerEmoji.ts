import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswerEmoji",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the emoji of the poll answer",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.emoji?.toString())
    },
})