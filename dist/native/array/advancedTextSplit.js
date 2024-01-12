"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$advancedTextSplit",
    version: "1.4.0",
    description: "Split and get all at the same time multiple times",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to use",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "split;index",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
            description: "The split followed by the index to get"
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [text, splits]) {
        for (let i = 0, len = splits.length; i < len; i += 2) {
            const split = splits[i];
            const index = Number(splits[i + 1]);
            text = text.split(split)[index];
            if (text === undefined)
                return this.success();
        }
        return this.success(text);
    },
});
//# sourceMappingURL=advancedTextSplit.js.map