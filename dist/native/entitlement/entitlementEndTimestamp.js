"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementEndTimestamp",
    version: "1.5.0",
    description: "Returns the time at which this entitlement ends",
    output: structures_1.ArgType.Number,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.endsTimestamp);
    },
});
//# sourceMappingURL=entitlementEndTimestamp.js.map