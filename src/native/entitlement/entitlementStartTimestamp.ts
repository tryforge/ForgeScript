/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementStartTimestamp",
    version: "1.5.0",
    description: "Returns the time at which this entitlement starts",
    output: ArgType.Number,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.startsTimestamp)
    },
})