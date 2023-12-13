"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildIcon",
    version: "1.0.0",
    description: "Returns the server icon",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the guild icon",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, size, ext]) {
        return this.success((guild ?? ctx.guild)?.iconURL({
            extension: ext || undefined,
            size: size || 2048,
        }));
    },
});
//# sourceMappingURL=guildIcon.js.map