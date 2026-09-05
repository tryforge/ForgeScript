/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Sticker, StickerFormatType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum StickerProperty {
    id = "id",
    name = "name",
    guildID = "guildID",
    authorID = "authorID",
    timestamp = "timestamp",
    url = "url",
    format = "format",
    available = "available",
    tags = "tags",
    sortValue = "sortValue",
    packID = "packID",
    description = "description"
}

export const StickerProperties = defineProperties<typeof StickerProperty, Sticker>({
    guildID: (i) => i?.guild?.id,
    authorID: (i) => i?.user?.id,
    id: (i) => i?.id,
    name: (i) => i?.name,
    url: (i) => i?.url,
    timestamp: (i) => i?.createdTimestamp,
    format: i => StickerFormatType[i?.format!],
    available: i => i?.available,
    description: i => i?.description,
    tags: (i, sep) => i?.tags,
    sortValue: i => i?.sortValue,
    packID: i => i?.packId
})