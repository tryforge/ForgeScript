/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { ForumTagProperty, ForumTagProperties } from "../../properties/forumTag"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$forumTags",
    version: "1.5.0",
    description: "Returns all available tags of a forum",
    unwrap: true,
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    args: [
        {
            name: "channel ID",
            description: "The channel to get tags of",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
            required: true
        },
        {
            name: "property",
            description: "The property to return for every tag",
            rest: false,
            type: ArgType.Enum,
            enum: ForumTagProperty
        },
        {
            name: "separator",
            description: "The separator to use for every tag property",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [ch, prop, sep]) {
        const channel = ch as ThreadOnlyChannel | undefined
        const tags = channel?.availableTags

        if (!tags) return this.success()
        if (!prop) return this.successJSON(tags)
        return this.success(tags.map(tag => ForumTagProperties[prop](tag)).join(sep ?? ", "))
    },
})