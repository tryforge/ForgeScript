"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomGuildEmojiID",
    version: "1.0.3",
    description: "Returns a random emoji ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emoji from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    execute(ctx, [g]) {
        g ??= ctx.guild;
        return this.success(g?.emojis.cache.randomKey());
    },
});
//# sourceMappingURL=randomGuildEmojiID.js.map