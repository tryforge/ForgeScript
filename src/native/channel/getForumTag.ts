/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { ForumTagProperties, ForumTagProperty } from "../../properties/forumTag"

export default new NativeFunction({
    name: "$getForumTag",
    version: "2.7.0",
    description: "Returns the tag of a forum",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to pull tags from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
        },
        {
            name: "tag ID",
            description: "The tag to retrieve",
            rest: false,
            required: true,
            type: ArgType.ForumTag,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of the tag to return",
            rest: false,
            type: ArgType.Enum,
            enum: ForumTagProperty
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [, tag, prop]) {
        if (prop) return this.success(ForumTagProperties[prop](tag))
        return this.successJSON(tag)
    },
})