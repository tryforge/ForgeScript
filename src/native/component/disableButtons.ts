/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ButtonBuilder, ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableButtons",
    version: "2.2.0",
    description: "Disables all buttons on the current message",
    aliases: ["$disableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components
        const components = Number.isFinite(index) ? new Array(data[index]) : data

        ctx.container.actionRow?.components.forEach((x) => {
            if (x instanceof ButtonBuilder) x.setDisabled(true)
        })

        for (let i = 0, len = components.length; i < len; i++) {
            const row = components[i]
            if (!(row instanceof ActionRowBuilder)) continue
            const actionRow = new ActionRowBuilder()
            row?.components.forEach((x) => {
                if (x instanceof ButtonBuilder) actionRow.addComponents(x.setDisabled(true))
            })
        }

        return this.success()
    },
})