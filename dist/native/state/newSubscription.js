"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_1 = require("../../properties/subscription");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Enum,
            enum: subscription_1.SubscriptionProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.success(subscription_1.SubscriptionProperties[prop](ctx.states?.subscription?.new, sep));
    },
});
//# sourceMappingURL=newSubscription.js.map