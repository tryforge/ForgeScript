"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEscapeRegex = void 0;
const structures_1 = require("../../structures");
exports.MarkdownEscapeRegex = /(`)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$inlineCode",
    aliases: [
        "$inline",
        "$markdown"
    ],
    version: "1.3.0",
    brackets: true,
    description: "Adds backticks to text",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to mark down, this will attempt to escape all `",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success(`\`${str.replace(exports.MarkdownEscapeRegex, "\\$1")}\``);
    },
});
//# sourceMappingURL=inlineCode.js.map