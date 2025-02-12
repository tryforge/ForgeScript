"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forumDefaultReactionEmoji",
    version: "2.2.0",
    description: "Returns the default reaction emoji of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get default reaction emoji from",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThreadOnly(),
            required: true
        },
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [chan]) {
        const emoji = chan?.defaultReactionEmoji;
        return this.success(emoji?.id ? ctx.client.emojis.cache.get(emoji.id)?.toString() : emoji?.name);
    },
});
//# sourceMappingURL=forumDefaultReactionEmoji.js.map