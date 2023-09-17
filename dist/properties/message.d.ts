import { Message } from "discord.js";
export declare enum MessageProperty {
    id = "id",
    content = "content",
    flags = "flags",
    username = "username",
    type = "type",
    channelID = "channelID",
    guildID = "guildID",
    authorID = "authorID",
    timestamp = "timestamp"
}
export declare const MessageProperties: import("../functions/defineProperties").Properties<typeof MessageProperty, Message<boolean>>;
//# sourceMappingURL=message.d.ts.map