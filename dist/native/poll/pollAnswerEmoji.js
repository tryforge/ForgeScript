"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswerEmoji",
    description: "Can only be used in poll events, returns the emoji of the poll answer",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.emoji?.toString());
    },
});
//# sourceMappingURL=pollAnswerEmoji.js.map