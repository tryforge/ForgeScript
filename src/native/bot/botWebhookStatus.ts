/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ApplicationWebhookEventStatus } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botWebhookStatus",
    version: "2.2.0",
    description: "Returns the client webhook event status",
    unwrap: false,
    aliases: ["$clientWebhookStatus"],
    output: ApplicationWebhookEventStatus,
    execute(ctx) {
        const status = ctx.client.application.eventWebhooksStatus
        return this.success(status ? ApplicationWebhookEventStatus[status] : null)
    },
})