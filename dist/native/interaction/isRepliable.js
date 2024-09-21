"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isRepliable",
    version: "1.5.0",
    description: "Returns whether this interaction can be replied to",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isRepliable()));
    },
});
//# sourceMappingURL=isRepliable.js.map