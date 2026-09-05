/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ApplicationEmoji } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ApplicationEmojiProperty {
    authorID = "authorID",
    name = "name",
    id = "id",
    identifier = "identifier",
    requiresColons = "requiresColons",
    managed = "managed",
    timestamp = "timestamp",
    animated = "animated",
    url = "url",
    format = "format",
}

export const ApplicationEmojiProperties = defineProperties<typeof ApplicationEmojiProperty, ApplicationEmoji>({
    authorID: (i) => i?.author?.id,
    id: (i) => i?.id,
    identifier: (i) => i?.identifier,
    name: (i) => i?.name,
    managed: (i) => i?.managed,
    animated: (i) => i?.animated,
    url: (i) => i?.imageURL(),
    format: (i) => i?.toString(),
    requiresColons: (i) => i?.requiresColons,
    timestamp: (i) => i?.createdTimestamp
})