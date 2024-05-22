"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementConsume",
    version: "1.5.0",
    description: "Consumes an entitlement from an interaction",
    unwrap: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlement to consume",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [name]) {
        return this.success(ctx.interaction?.entitlements.get(name)?.consume().then(() => true).catch(ctx.noop) ?? false);
    },
});
//# sourceMappingURL=entitlementConsume.js.map