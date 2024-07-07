import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pollAnswerVoteCount",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the vote count of this poll answer",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.voteCount)
    },
})