/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRowBuilder } from "discord.js"
import { NativeFunction } from "../../structures"
import { addActionRow } from "../../functions/components"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        addActionRow(ctx, false)
        ctx.container.actionRow = new ActionRowBuilder()
        return this.success()
    },
})