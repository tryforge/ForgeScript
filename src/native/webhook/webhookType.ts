/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { WebhookType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookType",
    version: "2.3.0",
    description: "Returns the type of a webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook to pull data from",
            rest: false,
            type: ArgType.Webhook,
            required: true,
        },
    ],
    output: WebhookType,
    execute(ctx, [web]) {
        return this.success(WebhookType[web.type])
    },
})