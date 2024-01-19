"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrikeThroughEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.StrikeThroughEscapeRegex = /(~)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$strikethrough",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text strikethrough",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make strikethrough, this will attempt to escape all ~",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success((0, discord_js_1.strikethrough)(str.replace(exports.StrikeThroughEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=strikethrough.js.map