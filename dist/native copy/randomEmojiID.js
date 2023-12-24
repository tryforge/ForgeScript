"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomEmojiID",
    version: "1.0.3",
    description: "Returns a random emoji ID",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.emojis.cache.randomKey());
    },
});
//# sourceMappingURL=randomEmojiID.js.map