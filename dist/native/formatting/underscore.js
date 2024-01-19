"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnderscoreEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.UnderscoreEscapeRegex = /(_)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$underscore",
    version: "1.3.0",
    brackets: true,
    description: "Adds underscore to text",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to add underscore to, this will attempt to escape all _",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success((0, discord_js_1.underscore)(str.replace(exports.UnderscoreEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=underscore.js.map