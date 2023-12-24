"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodContent",
    version: "1.2.0",
    description: "The content automod acted upon",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.content);
    },
});
//# sourceMappingURL=automodContent.js.map