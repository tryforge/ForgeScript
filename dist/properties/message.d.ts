import { Message, MessageSnapshot } from "discord.js";
export declare enum MessageProperty {
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
    pinnable = "pinnable"
}
export declare const MessageProperties: import("..").Properties<typeof MessageProperty, Message<boolean> | MessageSnapshot>;
//# sourceMappingURL=message.d.ts.map