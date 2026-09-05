/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRowBuilder, ContainerBuilder, MentionableSelectMenuBuilder, SelectMenuDefaultValueType, User } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { buildComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$editMentionableSelectMenuOf",
    version: "2.2.0",
    description: "Edits a mentionable select menu of a message, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to edit select menu for",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "old custom ID",
            description: "The custom id of the menu to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new custom ID",
            description: "The new custom id to use for this menu",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: ArgType.Boolean,
            rest: false,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "default roles/users",
            rest: true,
            type: ArgType.RoleOrUser,
            description: "The default selected roles or users to use",
            pointer: 0,
            pointerProperty: "guild"
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, old, id, placeholder, disabled, min, max, defaults]) {
        const components = m.components.map((x) => buildComponent(x))

        outer:
        for (let i = 0, len = components.length;i < len;i++) {
            const comp = components[i]
            const comps = comp instanceof ContainerBuilder
                ? comp.components.map((x) => buildComponent(x.toJSON()))
                : ("components" in comp ? comp.components : undefined)
            if (!comps) continue
            
            for (let n = 0, len = comps.length;n < len;n++) {
                const row = comps[n]
                const menu = row instanceof ActionRowBuilder ? row.components[0] : row

                if (menu instanceof MentionableSelectMenuBuilder && menu.data.custom_id === old) {
                    menu.setCustomId(id)
                    
                    if (placeholder) menu.setPlaceholder(placeholder)
                    if (typeof disabled === "boolean") menu.setDisabled(disabled)
                    if (typeof min === "number") menu.setMinValues(min)
                    if (typeof max === "number") menu.setMaxValues(max)
                    if (defaults.length) {
                        menu.setDefaultValues(defaults.filter(Boolean).map(x => {
                            return {
                                id: x.id,
                                type: x instanceof User ? SelectMenuDefaultValueType.User : SelectMenuDefaultValueType.Role
                            }
                        }))
                    }
                    
                    if (comp instanceof ContainerBuilder) comp.spliceComponents(n, 1, new ActionRowBuilder().addComponents(menu))
                    
                    break outer
                }
            }
        }

        return this.success(
            !!(await m.edit({ components: components.map((x) => x.toJSON()) }).catch(ctx.noop))
        )
    },
})