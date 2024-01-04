"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sliceText",
    version: "1.3.0",
    description: "Slices given text",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to slice",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "start",
            description: "The start index",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number
        },
        {
            name: "end",
            description: "The end index",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [text, start, end]) {
        return this.success(text.trim().split(/ +/g).slice(start ?? undefined, end ?? undefined).join(" "));
    },
});
//# sourceMappingURL=sliceText.js.map