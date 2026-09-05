/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ActionRowBuilder, ChannelSelectMenuBuilder, createComponentBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addChannelSelectMenuTo",
    version: "2.4.0",
    description: "Creates a channel select menu on a message",
    output: ArgType.Boolean,
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
            name: "default channels",
            rest: true,
            type: ArgType.String,
            description: "The default selected channels to use",
        }
    ],
    async execute(ctx, [, m, id, placeholder, min, max, disabled, channels]) {
        const menu = new ChannelSelectMenuBuilder()
            .setDefaultChannels(channels)
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