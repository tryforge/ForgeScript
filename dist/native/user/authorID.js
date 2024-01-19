"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    aliases: ["$userID"],
    description: "Retrieves a user's id",
    unwrap: false,
    output: NativeFunction_1.ArgType.User,
    execute(ctx) {
        return this.success(ctx.user?.id);
    },
});
//# sourceMappingURL=authorID.js.map