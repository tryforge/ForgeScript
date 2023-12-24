"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionAuthorID",
    version: "1.0.0",
    description: "The reaction author id that reacted",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.states?.user?.new?.id);
    },
});
//# sourceMappingURL=reactionAuthorID.js.map