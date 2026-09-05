/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$webhookIsUserCreated",
    version: "2.3.0",
    description: "Checks whether given webhook is user created",
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
    output: ArgType.Boolean,
    execute(ctx, [web]) {
        return this.success(web.isUserCreated())
    },
})