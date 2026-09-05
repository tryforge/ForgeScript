/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$hasAllEntitlements",
    version: "1.5.0",
    aliases: [
        "$interactionHasAllEntitlements"
    ],
    description: "Checks whether this interaction user has all of the given entitlements",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlements to validate",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ names ]) {
        return this.success(ctx.interaction?.entitlements.hasAll(...names))
    },
})