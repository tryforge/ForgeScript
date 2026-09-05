/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, ThreadOnlyChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { parseSingleEmoji } from "../../functions/parseSingleEmoji"

export default new NativeFunction({
    name: "$editForumTag",
    version: "2.5.0",
    description: "Edits an existing forum tag, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The forum to edit tag on",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThreadOnly(),
        },
        {
            name: "tag ID",
            description: "The tag to edit",
            rest: false,
            required: true,
            type: ArgType.ForumTag,
            pointer: 0
        },
        {
            name: "name",
            description: "The new name for the tag",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The new emoji for the tag",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "moderated",
            description: "Whether the tag can only be applied by mods",
            rest: false,
            type: ArgType.Boolean,
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ channel, tag, name, emoji, mod ]) {
        const forum = channel as ThreadOnlyChannel
        const tags = forum.availableTags
        const index = tags.findIndex((x) => x.id === tag.id)

        if (name) tag.name = name
        if (emoji !== null) tag.emoji = parseSingleEmoji(ctx, emoji)
        if (typeof mod === "boolean") tag.moderated = mod

        tags[index] = tag
        return this.success(!!(await forum.setAvailableTags(tags).catch(ctx.noop)))
    },
})