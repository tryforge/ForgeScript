/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Guild } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$botMutualGuilds",
    version: "1.5.0",
    aliases: ["$clientMutualGuilds"],
    description: "Returns the client's mutual guilds with a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get mutual guilds from",
            rest: false,
            required: true,
            type: ArgType.User,
        },
        {
            name: "separator",
            description: "The separator to use for every guild",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: array<ArgType.Guild>(),
    async execute(ctx, [user, sep]) {
        user ??= ctx.user!
        if (!user) return this.success()

        const guilds = await Promise.all(
            ctx.client.guilds.cache.map(async (guild) => {
                try {
                    await guild.members.fetch(user.id)
                    return guild
                } catch {
                    return null
                }
            })
        )

        return this.success(guilds.filter((x) => x instanceof Guild).map((guild) => guild.id).join(sep ?? ", "))
    },
})