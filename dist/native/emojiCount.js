"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$emojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of all servers",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.client.emojis.cache.size);
    },
});
//# sourceMappingURL=emojiCount.js.map