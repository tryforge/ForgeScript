/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { GuildForumTag } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ForumTagProperty {
    emoji = "emoji",
    id = "id",
    moderated = "moderated",
    name = "name"
}

export const ForumTagProperties = defineProperties<typeof ForumTagProperty, GuildForumTag>({
    emoji: (i) =>
        i && "emoji" in i
            ? i.emoji?.id
                ? `<:${i.emoji?.name}:${i.emoji?.id}>`
                : i.emoji?.name
            : null,
    id: (i) => i?.id,
    moderated: (i) => i?.moderated,
    name: (i) => i?.name,
})