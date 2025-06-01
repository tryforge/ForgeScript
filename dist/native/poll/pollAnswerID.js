"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswerID",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the answer id used",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.id);
    },
});
//# sourceMappingURL=pollAnswerID.js.map