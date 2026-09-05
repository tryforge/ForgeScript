import { Message } from "discord.js";
export declare enum BulkProperty {
    messages = "messages",
    contents = "contents",
    timestamps = "timestamps",
    attachments = "attachments",
    stickers = "stickers",
    users = "users",
    count = "count"
}
export declare const BulkProperties: import("..").Properties<typeof BulkProperty, (Message<boolean> | import("discord.js").PartialMessage<boolean>)[]>;
//# sourceMappingURL=bulk.d.ts.map