"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    description: "Retrieves an user's id",
    unwrap: true,
    execute: async function (ctx) {
        return Return_1.Return.success(ctx.user?.id);
    }
});
//# sourceMappingURL=authorID.js.map