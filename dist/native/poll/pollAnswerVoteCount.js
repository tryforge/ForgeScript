"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswerVoteCount",
    description: "Can only be used in poll events, returns the vote count of this poll answer",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.voteCount);
    },
});
//# sourceMappingURL=pollAnswerVoteCount.js.map