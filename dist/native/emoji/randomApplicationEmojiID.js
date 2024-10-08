"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomApplicationEmojiID",
    version: "1.5.0",
    description: "Returns a random emoji ID of the application",
    unwrap: false,
    output: structures_1.ArgType.ApplicationEmoji,
    async execute(ctx) {
        const emojis = await ctx.client.application.emojis.fetch().catch(ctx.noop);
        return this.success(emojis ? emojis.randomKey() : null);
    },
});
//# sourceMappingURL=randomApplicationEmojiID.js.map