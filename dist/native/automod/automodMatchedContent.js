"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodMatchedContent",
    version: "1.2.0",
    description: "The matched content automod acted upon",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.matchedContent);
    },
});
//# sourceMappingURL=automodMatchedContent.js.map