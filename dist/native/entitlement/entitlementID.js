"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementID",
    version: "1.5.0",
    description: "Returns this entitlement's id",
    output: structures_1.ArgType.String,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.id);
    },
});
//# sourceMappingURL=entitlementID.js.map