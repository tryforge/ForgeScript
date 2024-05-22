"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementIsDeleted",
    version: "1.5.0",
    description: "Returns whether this entitlement is deleted",
    output: structures_1.ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.deleted);
    },
});
//# sourceMappingURL=entitlementIsDeleted.js.map