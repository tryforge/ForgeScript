"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cropText",
    version: "1.0.3",
    description: "Crops given text",
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to crop",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "start index",
            description: "The start index to start cropping",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "end index",
            description: "The end index to finish cropping",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    unwrap: true,
    execute(_, [text, start, end]) {
        return this.success(text.slice(start, end || undefined));
    },
});
//# sourceMappingURL=cropText.js.map