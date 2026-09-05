/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$userBanner",
    version: "1.0.0",
    description: "Returns the banner of a user",
    brackets: false,
    output: ArgType.URL,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the banner",
            rest: false,
            required: true,
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
    unwrap: true,
    async execute(ctx, [user, size, ext]) {
        user ??= ctx.user!

        if (!user?.banner) await user.fetch()

        return this.success(
            user?.bannerURL({
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
        )
    },
})
