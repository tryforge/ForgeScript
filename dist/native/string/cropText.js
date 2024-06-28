"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cropText",
    version: "1.0.3",
    description: "Crops given text",
    brackets: true,
    output: structures_1.ArgType.String,
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
        {
            name: "ending",
            description: "Add extra text to the end",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [text, start, end, ending]) {
        const cropped = text.slice(start, end || undefined);
        return this.success(ending && end && text.length > end ? cropped + ending : cropped);
    },
});
//# sourceMappingURL=cropText.js.map