"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpoilerEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.SpoilerEscapeRegex = /(\|)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$spoiler",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text a spoiler",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make spoiler, this will attempt to escape all |",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success((0, discord_js_1.spoiler)(str.replace(exports.SpoilerEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=spoiler.js.map