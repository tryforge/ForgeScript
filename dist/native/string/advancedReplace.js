"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$advancedReplace",
    version: "1.5.0",
    aliases: [
        "$advancedReplaceText"
    ],
    output: structures_1.ArgType.String,
    description: "Replaces text in a string multiple times",
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
            name: "match;replacement",
            description: "The text to match and their replacement",
            required: true,
            rest: true,
            type: structures_1.ArgType.String,
        }
    ],
    brackets: true,
    execute(ctx, [text, args]) {
        for (let i = 0; i < args.length; i += 2) {
            const [match, replacement] = args.slice(i, i + 2);
            text = text.replaceAll(match ?? "", replacement ?? "");
        }
        return this.success(text);
    },
});
//# sourceMappingURL=advancedReplace.js.map