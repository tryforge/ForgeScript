/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { EntitlementType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementType",
    version: "1.5.0",
    description: "Returns this entitlement's type",
    output: EntitlementType,
    unwrap: false,
    execute(ctx) {
        return this.success(EntitlementType[ctx.entitlement?.type!])
    },
})