/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { DiscordAPIError } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether the given user can be DMed",
    unwrap: true,
    brackets: false,
    output: ArgType.Boolean,
    args: [
        {
            name: "user",
            description: "The user to test DMs",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user!
        return this.success(
            !!(await user?.send("").catch((err) => (err instanceof DiscordAPIError && Number(err.code) === 50006)))
        )
    },
})
