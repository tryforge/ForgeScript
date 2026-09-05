/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookURL",
    version: "1.0.0",
    description: "Returns the url of a webhook",
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
    output: ArgType.URL,
    execute(ctx, [web]) {
        return this.success(web.url)
    },
})
