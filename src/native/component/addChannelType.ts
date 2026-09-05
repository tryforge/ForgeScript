/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ChannelSelectMenuBuilder, ChannelType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { getLastComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$addChannelType",
    version: "1.4.0",
    aliases: ["$addChannelTypes"],
    description: "Adds channel types to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The channel types to add",
            rest: true,
            enum: ChannelType,
            required: true,
            type: ArgType.Enum
        }
    ],
    execute(ctx, [ types ]) {
        const menu = getLastComponent(ctx)
        if (menu instanceof ChannelSelectMenuBuilder) {
            menu.addChannelTypes(types)
        }
        return this.success()
    },
})