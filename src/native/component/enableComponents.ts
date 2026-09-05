/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRowBuilder } from "discord.js"
import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$enableComponents",
    version: "2.2.0",
    description: "Enables all components on the current message",
    aliases: ["$enableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components
        ctx.container.actionRow?.components.forEach((x) => x.setDisabled(false))

        for (let comp of components) {
            if (!(comp instanceof ActionRowBuilder)) continue
            const actionRow = new ActionRowBuilder()
            comp?.components.forEach((x) => actionRow.addComponents(x.setDisabled(false)))
        }

        return this.success()
    },
})