"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botID",
    version: "1.0.0",
    description: "Returns the client's id",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.user.id);
    },
});
//# sourceMappingURL=botID.js.map