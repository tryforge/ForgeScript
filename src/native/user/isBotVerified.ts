/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isBotVerified",
    version: "1.0.0",
    description: "Returns whether the bot is verified",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "user ID",
            description: "The bot to check whether its verified",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    execute(ctx, [user]) {
        return this.success(Boolean((user ?? ctx.user)?.flags?.has("VerifiedBot")))
    },
})
