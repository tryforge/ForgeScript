/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildNames",
    version: "1.0.0",
    description: "Returns the server names of the bot",
    brackets: false,
    aliases: [
        "$serverNames"
    ],
    output: array<ArgType.String>(),
    args: [
        {
            name: "separator",
            description: "The separator to use for each guild",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [sep]) {
        return this.success(ctx.client.guilds.cache.map((x) => x.name).join(sep || ", "))
    },
})
