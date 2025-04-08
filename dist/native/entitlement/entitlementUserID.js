"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementUserID",
    version: "1.5.0",
    description: "Returns this entitlement's user id",
    output: structures_1.ArgType.User,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.userId);
    },
});
//# sourceMappingURL=entitlementUserID.js.map