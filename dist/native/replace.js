"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$replace",
    version: "1.0.0",
    description: "Replace text in a string",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "match",
            description: "Text to match in base",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "amount",
            description: "How many times to perform this replacement",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [text, match, replacement, amount]) {
        amount ??= -1;
        if (amount === -1) {
            return this.success(text.replaceAll(match, replacement));
        }
        let i = 0;
        return this.success(text.replaceAll(match, (m) => (++i <= amount ? replacement : m)));
    },
});
//# sourceMappingURL=replace.js.map