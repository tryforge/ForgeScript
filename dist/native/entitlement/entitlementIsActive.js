"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementIsActive",
    version: "1.5.0",
    description: "Returns whether this entitlement is active",
    output: structures_1.ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.isActive());
    },
});
//# sourceMappingURL=entitlementIsActive.js.map