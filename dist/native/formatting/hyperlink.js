"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoldEscapeRegex = void 0;
const structures_1 = require("../../structures");
exports.BoldEscapeRegex = /(\*)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$hyperlink",
    version: "1.3.0",
    brackets: true,
    description: "Creates an hyperlink text",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make hyperlink",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "url",
            description: "The url to use for hyperlink",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str, url]) {
        return this.success(`[${str}](${url})`);
    },
});
//# sourceMappingURL=hyperlink.js.map