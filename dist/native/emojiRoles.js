"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiRoles",
    version: "1.0.0",
    description: "Returns the role ids that can use this emote",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its roles",
            rest: false,
            type: structures_1.ArgType.GuildEmoji,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every role",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [emoji, sep]) {
        emoji ?? ctx.emoji;
        return this.success(emoji?.roles.cache.map((x) => x.id).join(sep || ", "));
    },
});
//# sourceMappingURL=emojiRoles.js.map