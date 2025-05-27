import { Message, MessageSnapshot } from "discord.js";
export declare enum MessageProperty {
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
    stickers = "stickers"
}
export declare const MessageProperties: import("../functions/defineProperties").Properties<typeof MessageProperty, Message<boolean> | MessageSnapshot>;
//# sourceMappingURL=message.d.ts.map