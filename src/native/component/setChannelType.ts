/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { getLastComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$setChannelType",
    version: "1.5.0",
    aliases: ["$setChannelTypes"],
    description: "Sets channel types for the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to set",
            rest: true,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ types ]) {
        const menu = getLastComponent(ctx)
        if (menu instanceof ChannelSelectMenuBuilder) {
            menu.setChannelTypes(types)
        }
        return this.success()
    },
})