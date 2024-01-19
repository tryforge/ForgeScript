"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleUnicodeEmoji",
    version: "1.3.0",
    output: structures_1.ArgType.String,
    description: "Returns the unicode emoji used by the role",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its unicode emote",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.unicodeEmoji);
    },
});
//# sourceMappingURL=roleUnicodeEmoji.js.map