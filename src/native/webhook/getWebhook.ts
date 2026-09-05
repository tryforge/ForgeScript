/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { WebhookProperties, WebhookProperty } from "../../properties/webhook"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Webhook,
            required: true,
        },
        {
            name: "property",
            description: "The property of the webhook to return",
            rest: false,
            type: ArgType.Enum,
            enum: WebhookProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [web, prop]) {
        if (prop) return this.success(WebhookProperties[prop](web))
        return this.successJSON(web)
    },
})
