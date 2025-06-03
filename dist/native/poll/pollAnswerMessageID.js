"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswerMessageID",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the message id of the poll answer",
    unwrap: false,
    output: structures_1.ArgType.Message,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.poll.message.id);
    },
});
//# sourceMappingURL=pollAnswerMessageID.js.map