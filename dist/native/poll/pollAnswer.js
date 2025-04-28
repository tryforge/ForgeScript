"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswer",
    version: "1.5.0",
    brackets: true,
    unwrap: true,
    description: "Add a poll answer",
    args: [
        {
            name: "text",
            description: "The answer's text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "emoji",
            rest: false,
            description: "The emoji to use",
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [text, emoji]) {
        (ctx.container.poll?.answers).push({
            text,
            emoji: emoji || undefined
        });
        return this.success();
    },
});
//# sourceMappingURL=pollAnswer.js.map