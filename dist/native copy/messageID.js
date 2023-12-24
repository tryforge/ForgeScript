"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageID",
    version: "1.0.0",
    description: "Returns the message id",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.id);
    },
});
//# sourceMappingURL=messageID.js.map