/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementSkuID",
    version: "1.5.0",
    description: "Returns this entitlement's sku id",
    output: ArgType.String,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.skuId)
    },
})