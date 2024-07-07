import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswerID",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the answer id used",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.id)
    },
})