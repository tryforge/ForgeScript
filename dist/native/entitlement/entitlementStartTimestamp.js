"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementStartTimestamp",
    description: "Returns the time at which this entitlement starts",
    output: structures_1.ArgType.Time,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.startsTimestamp);
    },
});
//# sourceMappingURL=entitlementStartTimestamp.js.map