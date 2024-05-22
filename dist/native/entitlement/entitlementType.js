"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementType",
    version: "1.5.0",
    description: "Returns this entitlement's type",
    output: discord_js_1.EntitlementType,
    unwrap: false,
    execute(ctx) {
        return this.success(discord_js_1.EntitlementType[ctx.entitlement?.type]);
    },
});
//# sourceMappingURL=entitlementType.js.map