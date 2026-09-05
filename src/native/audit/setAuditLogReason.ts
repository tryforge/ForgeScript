/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.String
        },
    ],
    execute(ctx, [reason]) {
        ctx.reason = reason
        return this.success()
    },
})