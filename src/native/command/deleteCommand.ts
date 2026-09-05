/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import noop from "../../functions/noop"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteCommand",
    version: "1.2.0",
    description: "Deletes the author's message",
    unwrap: false,
    async execute(ctx) {
        await ctx.message?.delete().catch(ctx.noop)
        return this.success()
    },
})