/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementConsume",
    version: "1.5.0",
    description: "Consumes an entitlement from an interaction, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement ID",
            description: "The ID of the entitlement to consume",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ id ]) {
        return this.success(!!(await ctx.interaction?.entitlements.get(id)?.consume().then(() => true).catch(ctx.noop)))
    },
})