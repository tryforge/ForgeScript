import { Message, MessageType } from "discord.js"
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
}

export const MessageProperties = defineProperties<typeof MessageProperty, Message>({
    content: (m) => m?.content,
    id: (m) => m?.id,
    flags: (m, sep) => m?.flags.toArray().join(sep || ", "),
    channelID: (m) => m?.channelId,
    guildID: (m) => m?.guildId,
    type: (m) => (m ? MessageType[m.type] : undefined),
    username: (m) => m?.author?.username,
    authorID: (m) => m?.author?.id,
    timestamp: (m) => m?.createdTimestamp,
})
