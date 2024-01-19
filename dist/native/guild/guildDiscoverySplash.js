"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildDiscoverySplash",
    version: "1.3.0",
    description: "Returns the guild discovery splash",
    brackets: false,
    aliases: [
        "$serverDiscoverySplash"
    ],
    output: structures_1.ArgType.URL,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the discovery splash",
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
    execute(ctx, [g, size, ext]) {
        return this.success((g ?? ctx.guild)?.discoverySplashURL({
            extension: ext || undefined,
            size: size || 2048,
        }));
    },
});
//# sourceMappingURL=guildDiscoverySplash.js.map