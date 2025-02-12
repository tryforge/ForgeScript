"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionCount",
    version: "1.5.0",
    description: "Returns the count of reacted users",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.reaction?.count);
    },
});
//# sourceMappingURL=reactionCount.js.map