"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementStartTimestamp",
    version: "1.5.0",
    description: "Returns the time at which this entitlement starts",
    output: structures_1.ArgType.Number,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.startsTimestamp);
    },
});
//# sourceMappingURL=entitlementStartTimestamp.js.map