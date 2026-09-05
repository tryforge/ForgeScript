/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$fetchApplication",
    version: "2.7.0",
    description: "Fetches the application of the client",
    unwrap: false,
    async execute(ctx) {
        await ctx.client.application.fetch().catch(ctx.noop)
        return this.success()
    },
})