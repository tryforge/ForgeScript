/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userGuildBadge",
    version: "2.5.0",
    description: "Returns the primary guild tag badge of a user",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to get its primary guild",
            required: true,
            rest: false,
            type: ArgType.User,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.URL,
    execute(ctx, [user, size, ext]) {
        return this.success((user ?? ctx.user)?.guildTagBadgeURL({
            extension: (ext as ImageExtension) || undefined,
            size: (size as ImageSize) || undefined,
        }))
    },
})