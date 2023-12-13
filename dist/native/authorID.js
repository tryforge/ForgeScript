"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    description: "Retrieves a user's id",
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.user?.id);
    },
});
//# sourceMappingURL=authorID.js.map