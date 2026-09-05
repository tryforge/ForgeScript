/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MessageProperties, MessageProperty } from "../../properties/message"

export default new NativeFunction({
    name: "$getMessage",
    version: "1.0.3",
    description: "Retrieves data of a message, not providing any property returns message json",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: MessageProperty,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [, m, prop, sep]) {
        if (!prop) return this.successJSON(m)
        return this.success(MessageProperties[prop](m, sep || ", "))
    },
})
