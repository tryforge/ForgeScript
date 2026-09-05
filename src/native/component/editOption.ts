/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRowBuilder, ContainerBuilder, StringSelectMenuBuilder, parseEmoji } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { buildComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$editOption",
    version: "1.4.0",
    description: "Edits a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name to find",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "new name",
            description: "The new option name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The new description for this option",
            rest: false,
            type: ArgType.String,
            required: false,
        },
        {
            name: "value",
            description: "The new value for this option",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for this option",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "default",
            description: "Whether to set this option as default",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [old, name, desc, value, emoji, def]) {
        for (let i = 0, len = ctx.container.components.length;i < len;i++) {
            const comp = ctx.container.components[i]
            const comps = comp instanceof ContainerBuilder
                ? comp.components.map((x) => buildComponent(x.toJSON()))
                : ("components" in comp ? comp.components : undefined)
            if (!comps) continue

            for (let n = 0, len = comps.length;n < len;n++) {
                const row = comps[n]
                const menu = row instanceof ActionRowBuilder ? row.components[0] : row

                if (menu instanceof StringSelectMenuBuilder) {
                    const index = menu.options.findIndex(x => x.data.label === old)
                    if (index !== -1) {
                        const option = menu.options[index]

                        option.setLabel(name)
                        if (value) option.setValue(value)
                        if (emoji) option.setEmoji(parseEmoji(emoji)!)
                        if (desc) option.setDescription(desc)
                        if (typeof def === "boolean") option.setDefault(def)

                        if (comp instanceof ContainerBuilder) comp.spliceComponents(n, 1, new ActionRowBuilder().addComponents(menu))

                        return this.success()
                    }
                }
            }
        }

        return this.success()
    },
})