/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ChannelSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { getLastComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultChannels",
        "$addDefaultChannelOptions"
    ],
    description: "Adds default channel options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel IDs",
            description: "The channel ids",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ids ]) {
        const menu = getLastComponent(ctx)
        if (menu instanceof ChannelSelectMenuBuilder) {
            menu.addDefaultChannels(ids)
        }
        return this.success()
    },
})