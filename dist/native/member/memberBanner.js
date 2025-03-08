"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberBanner",
    version: "2.1.0",
    description: "Returns the member banner",
    brackets: false,
    output: structures_1.ArgType.URL,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to retrieve the banner",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Member,
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
    execute(ctx, [, user, size, ext]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        const hash = member?.banner ?? member?.user?.banner;
        return this.success(member?.user && hash
            ? new discord_js_1.CDN().banner(member.user.id, hash, {
                extension: ext || undefined,
                size: size || 2048,
            })
            : null);
    },
});
//# sourceMappingURL=memberBanner.js.map