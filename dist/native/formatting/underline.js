"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnderlineEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.UnderlineEscapeRegex = /(_)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$underline",
    version: "1.3.0",
    brackets: true,
    description: "Adds an underline to text",
    aliases: ["$underscore"],
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to add underline to, this will attempt to escape all _",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success((0, discord_js_1.underline)(str.replace(exports.UnderlineEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=underline.js.map