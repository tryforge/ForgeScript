/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchApplicationEmojis",
    version: "2.5.0",
    description: "Caches all application emojis of the client",
    unwrap: false,
    async execute(ctx) {
        await ctx.fetchApplicationEmojis()
        return this.success()
    },
})