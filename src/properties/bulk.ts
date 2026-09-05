/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import defineProperties from "../functions/defineProperties"
import { IStates } from "../core"
import { Message } from "discord.js"

export enum BulkProperty {
    messages = "messages",
    contents = "contents",
    timestamps = "timestamps",
    attachments = "attachments",
    stickers = "stickers",
    users = "users",
    count = "count"
}

export const BulkProperties = defineProperties<typeof BulkProperty, IStates["bulk"]>({
    messages: (i, sep) => i?.map(x => x.id).join(sep ?? ", "),
    timestamps: (i, sep) => i?.map(x => x.createdTimestamp).join(sep ?? ", "),
    attachments: (i, sep) => i?.flatMap(x => x.attachments.map(x => x.url)).filter(Boolean).join(sep ?? ", "),
    stickers: (i, sep) => i?.flatMap(x => x.stickers.map(x => x.url)).filter(Boolean).join(sep ?? ", "),
    contents: (i, sep) => i?.map(x => x.content).filter(Boolean).join(sep ?? ", "),
    users: (i, sep) => i?.map(x => x.author?.id).filter(Boolean).join(sep ?? ", "),
    count: i => i?.length
})