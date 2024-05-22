"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementIsConsumed",
    version: "1.5.0",
    description: "Returns whether this entitlement is consumed",
    output: structures_1.ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.consumed);
    },
});
//# sourceMappingURL=entitlementIsConsumed.js.map