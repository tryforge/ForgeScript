"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildBanner",
    version: "1.0.0",
    description: "Sets a guild banner, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
            description: "The guild to set banner on",
        },
        {
            name: "url",
            description: "The new banner",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(_, [guild, banner]) {
        return this.success((await guild.setBanner(banner || null).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildBanner.js.map