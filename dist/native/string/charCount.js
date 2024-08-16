"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$charCount",
    version: "1.0.0",
    aliases: ["$textLength"],
    description: "Gets the char count of a text",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "text",
            description: "The text to get its length",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "char",
            description: "The character to count in the text",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str, char]) {
        if (char === null) {
            return this.success(str.length);
        }
        else {
            return this.success(str.split(char).length - 1);
        }
    },
});
//# sourceMappingURL=charCount.js.map