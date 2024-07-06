"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswers",
    version: "1.5.0",
    brackets: true,
    unwrap: true,
    description: "Adds multiple poll answers",
    args: [
        {
            name: "text;emoji",
            description: "The answer's text followed by emoji",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [texts]) {
        const ref = ctx.container.poll?.answers;
        for (let i = 0, len = texts.length; i < len; i += 2) {
            const [text, em] = texts.slice(i, i + 2);
            ref.push({
                text,
                emoji: em || undefined
            });
        }
        return this.success();
    },
});
//# sourceMappingURL=pollAnswers.js.map