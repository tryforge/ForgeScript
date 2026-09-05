/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { SubscriptionProperties, SubscriptionProperty } from "../../properties/subscription"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newSubscription",
    version: "2.5.0",
    description: "Retrieves new data from an event whose context was a subscription instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: SubscriptionProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.success(SubscriptionProperties[prop](ctx.states?.subscription?.new, sep))
    },
})