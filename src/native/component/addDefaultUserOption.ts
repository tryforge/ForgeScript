/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { MentionableSelectMenuBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { getLastComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$addDefaultUserOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultUsers",
        "$addDefaultUserOptions"
    ],
    description: "Adds default user options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user IDs",
            description: "The user ids",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ids ]) {
        const menu = getLastComponent(ctx)
        if (menu instanceof UserSelectMenuBuilder || menu instanceof MentionableSelectMenuBuilder) {
            menu.addDefaultUsers(ids)
        }
        return this.success()
    },
})