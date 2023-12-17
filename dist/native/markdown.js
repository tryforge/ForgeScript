"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.MarkdownEscapeRegex = /(`)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$markdown",
    brackets: true,
    description: "Adds backticks to text",
    unwrap: true,
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
        return this.success((0, discord_js_1.bold)(str.replace(exports.MarkdownEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=markdown.js.map