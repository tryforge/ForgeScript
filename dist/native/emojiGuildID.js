"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiGuildID",
    version: "1.0.0",
    description: "Returns the emoji guild id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its guild id",
            rest: false,
            type: structures_1.ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ?? ctx.emoji;
        return this.success(emoji?.guild.id);
    },
});
//# sourceMappingURL=emojiGuildID.js.map