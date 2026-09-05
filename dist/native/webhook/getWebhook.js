"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const webhook_1 = require("../../properties/webhook");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getWebhook",
    version: "2.6.0",
    description: "Returns a webhook from a channel",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook to get",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
        {
            name: "property",
            description: "The property of the webhook to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: webhook_1.WebhookProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [web, prop]) {
        if (prop)
            return this.success(webhook_1.WebhookProperties[prop](web));
        return this.successJSON(web);
    },
});
//# sourceMappingURL=getWebhook.js.map