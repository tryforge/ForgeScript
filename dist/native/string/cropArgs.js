"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cropArgs",
    version: "1.4.0",
    description: "Crops given args",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "args",
            description: "The args to crop",
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
    execute(ctx, [text, start, end]) {
        return this.success(text
            .split(/ +/)
            .slice(start, end || undefined)
            .join(" "));
    },
});
//# sourceMappingURL=cropArgs.js.map