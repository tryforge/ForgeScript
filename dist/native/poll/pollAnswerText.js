"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswerText",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the text of the poll answer",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.states?.poll?.new?.text);
    },
});
//# sourceMappingURL=pollAnswerText.js.map