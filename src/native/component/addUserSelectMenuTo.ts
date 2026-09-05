/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRowBuilder, createComponentBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addUserSelectMenuTo",
    version: "1.5.0",
    output: ArgType.Boolean,
    description: "Creates a user select menu on a message",
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
            description: "The message to add select menu to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The custom id for this menu",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
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
            name: "disabled",
            description: "Whether the menu is disabled by default",
            rest: false,
            required: false,
            type: ArgType.Boolean
        },
        {
            name: "default users",
            rest: true,
            type: ArgType.String,
            description: "The default selected users to use",
        }
    ],
    async execute(ctx, [ , m, id, placeholder, min, max, disabled, users ]) {
        const menu = new UserSelectMenuBuilder()
            .setDefaultUsers(users)
            .setDisabled(disabled || false)
            .setCustomId(id)
            
        if (placeholder) menu.setPlaceholder(placeholder)
        if (min) menu.setMinValues(min)
        if (max) menu.setMaxValues(max)

        const components = m.components.map(x => createComponentBuilder(x.toJSON()))
        components.push(new ActionRowBuilder().addComponents(menu))

        return this.success(
            !!(await m.edit({ components: components.map(x => x.toJSON()) }).catch(ctx.noop))
        )
    }
})