"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const inlineCode_1 = require("./inlineCode");
exports.default = new structures_1.NativeFunction({
    name: "$codeBlock",
    version: "1.3.0",
    brackets: true,
    description: "Creates a code block with given text",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to create block with, this will attempt to escape all `",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "lang",
            description: "The language to give to this code block",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str, lang]) {
        str = str.replace(inlineCode_1.MarkdownEscapeRegex, "\\$1");
        return this.success(lang ?
            (0, discord_js_1.codeBlock)(lang, str) :
            (0, discord_js_1.codeBlock)(str));
    },
});
//# sourceMappingURL=codeBlock.js.map