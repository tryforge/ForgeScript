"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAuditLogReason",
    version: "2.5.0",
    description: "Sets the reason for audit log entries",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "reason",
            description: "The reason to set",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
    ],
    execute(ctx, [reason]) {
        ctx.reason = reason;
        return this.success();
    },
});
//# sourceMappingURL=setAuditLogReason.js.map