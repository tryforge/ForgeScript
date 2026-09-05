/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { InteractionType, Message, MessageSnapshot, MessageType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum MessageProperty {
    id = "id",
    content = "content",
    type = "type",
    flags = "flags",
    username = "username",
    authorID = "authorID",
    channelID = "channelID",
    threadID = "threadID",
    guildID = "guildID",
    webhookID = "webhookID",
    interactionID = "interactionID",
    interactionType = "interactionType",
    timestamp = "timestamp",
    editTimestamp = "editTimestamp",
    hasSnapshots = "hasSnapshots",
    hasThread = "hasThread",
    hasPoll = "hasPoll",
    system = "system",
    pinned = "pinned",
    tts = "tts",
    url = "url",
    attachments = "attachments",
    stickers = "stickers",
    embeds = "embeds",
    crosspostable = "crosspostable",
    deletable = "deletable",
    editable = "editable",
    pinnable = "pinnable",
}

export const MessageProperties = defineProperties<typeof MessageProperty, Message | MessageSnapshot>({
    id: (m) => m?.id,
    content: (m) => m?.content,
    type: (m) => (m ? MessageType[m.type] : undefined),
    flags: (m, sep) => m?.flags.toArray().join(sep ?? ", "),
    username: (m) => m?.author?.username,
    authorID: (m) => m?.author?.id,
    channelID: (m) => m?.channelId,
    threadID: (m) => m?.thread?.id,
    guildID: (m) => m?.guildId,
    webhookID: (m) => m?.webhookId,
    interactionID: (m) => m?.interactionMetadata?.id,
    interactionType: (m) => (m?.interactionMetadata ? InteractionType[m.interactionMetadata.type] : null),
    timestamp: (m) => m?.createdTimestamp,
    editTimestamp: (m) => m?.editedTimestamp,
    hasSnapshots: (m) => !!m?.messageSnapshots?.size,
    hasThread: (m) => m?.hasThread,
    hasPoll: (m) => !!m?.poll,
    system: (m) => m?.system,
    pinned: (m) => m?.pinned,
    tts: (m) => m?.tts,
    url: (m) => m?.url,
    attachments: (m, sep) => m?.attachments.map(x => x.url).join(sep ?? ", "),
    stickers: (m, sep) => m?.stickers.map(x => x.url).join(sep ?? ", "),
    embeds: (m) => (m && "embeds" in m ? JSON.stringify(m.embeds, undefined, 4) : null),
    crosspostable: (m) => m?.crosspostable,
    deletable: (m) => m?.deletable,
    editable: (m) => m?.editable,
    pinnable: (m) => m?.pinnable,
})