"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiNames",
    version: "1.0.0",
    description: "Returns the emote names of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the emotes of",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each emoji",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.emojis.cache.map((x) => x.toString()).join(sep || ", "));
    },
});
//# sourceMappingURL=emojiNames.js.map