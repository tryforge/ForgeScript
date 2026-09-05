"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$entitlementGuildID",
    version: "1.5.0",
    description: "Returns this entitlement's guild id",
    output: structures_1.ArgType.Guild,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.guildId);
    },
});
//# sourceMappingURL=entitlementGuildID.js.map