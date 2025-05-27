import { Message, MessageSnapshot, MessageType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum MessageProperty {
    id = "id",
    content = "content",
    flags = "flags",
    username = "username",
    type = "type",
    channelID = "channelID",
    guildID = "guildID",
    authorID = "authorID",
    timestamp = "timestamp",
    editTimestamp = "editTimestamp",
    hasPoll = "hasPoll",
    system = "system",
    pinned = "pinned",
    url = "url",
    attachments = "attachments",
    stickers = "stickers",
}

export const MessageProperties = defineProperties<typeof MessageProperty, Message | MessageSnapshot>({
    content: (m) => m?.content,
    id: (m) => m?.id,
    flags: (m, sep) => m?.flags.toArray().join(sep ?? ", "),
    channelID: (m) => m?.channelId,
    guildID: (m) => m?.guildId,
    type: (m) => (m ? MessageType[m.type] : undefined),
    username: (m) => m?.author?.username,
    authorID: (m) => m?.author?.id,
    timestamp: (m) => m?.createdTimestamp,
    editTimestamp: (m) => m?.editedTimestamp,
    hasPoll: (m) => !!m?.poll,
    system: (m) => m?.system,
    pinned: (m) => m?.pinned,
    url: (m) => m?.url,
    attachments: (m, sep) => m?.attachments.map(x => x.url).join(sep ?? ", "),
    stickers: (m, sep) => m?.stickers.map(x => x.url).join(sep ?? ", "),
})