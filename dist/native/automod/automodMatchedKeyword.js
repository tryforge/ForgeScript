"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodMatchedKeyword",
    category: "automod",
    version: "1.2.0",
    description: "The matched keyword the automod caught",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.matchedKeyword);
    },
});
//# sourceMappingURL=automodMatchedKeyword.js.map