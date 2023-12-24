"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodCustomMessage",
    version: "1.2.0",
    description: "The custom message used by automod on this detection",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.customMessage);
    },
});
//# sourceMappingURL=automodCustomMessage.js.map