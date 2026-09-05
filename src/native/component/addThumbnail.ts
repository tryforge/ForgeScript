/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ThumbnailBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addThumbnail",
    version: "2.4.0",
    description: "Adds a new thumbnail accessory",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url for the thumbnail",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description of the thumbnail",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [url, desc, spoiler]) {
        const thumbnail = new ThumbnailBuilder().setURL(url).setSpoiler(!!spoiler)

        if (desc) thumbnail.setDescription(desc)
        ctx.component.section?.setThumbnailAccessory(thumbnail)

        return this.success()
    },
})