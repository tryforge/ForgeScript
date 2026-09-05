/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { ClientThemeProperties, ClientThemeProperty } from "../../properties/clientTheme"

export default new NativeFunction({
    name: "$getMessageClientTheme",
    version: "2.7.0",
    description: "Retrieves the shared client theme sent with a message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its client theme",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: ClientThemeProperty,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [, message, prop, sep]) {
        const theme = (message ?? ctx.message)?.sharedClientTheme
        return this.success(ClientThemeProperties[prop](theme, sep))
    },
})
