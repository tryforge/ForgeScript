/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookExists",
    version: "1.0.0",
    description: "Checks whether given webhook id exists",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook id to check for",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && (await ctx.client.fetchWebhook(id).catch(() => false)) !== false)
    },
})