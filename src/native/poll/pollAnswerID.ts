import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswerID",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the answer id used",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.id)
    },
})