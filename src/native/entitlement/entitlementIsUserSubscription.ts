/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementIsUserSubscription",
    version: "1.5.0",
    description: "Returns whether this entitlement is for a user",
    output: ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.isUserSubscription())
    },
})