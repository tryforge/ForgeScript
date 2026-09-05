/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ChannelSelectMenuBuilder, ComponentType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addChannelSelectMenu",
    version: "1.4.0",
    description: "Creates a channel select menu",
    brackets: true,
    unwrap: true,
    args: [
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
            type: ArgType.Boolean
        },
        {
            name: "required",
            description: "Whether this menu is required inside a modal",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [ id, placeholder, min, max, disabled, required ]) {
        const menu = new ChannelSelectMenuBuilder()
            .setDisabled(disabled || false)
            .setRequired(required || false)
            .setCustomId(id)

        if (placeholder) menu.setPlaceholder(placeholder)
        if (min) menu.setMinValues(min)
        if (max) menu.setMaxValues(max)

        if (ctx.container.isInside(ComponentType.Label)) ctx.component.label?.setChannelSelectMenuComponent(menu)
        else ctx.container.actionRow?.addComponents(menu)

        return this.success()
    }
})