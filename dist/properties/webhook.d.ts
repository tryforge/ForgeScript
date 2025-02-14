import { Webhook, WebhookType } from "discord.js";
export declare enum WebhookProperty {
    id = "id",
    name = "name",
    type = "type",
    avatar = "avatar",
    ownerID = "ownerID",
    channelID = "channelID",
    guildID = "guildID",
    sourceChannelID = "sourceChannelID",
    sourceGuildID = "sourceGuildID",
    timestamp = "timestamp",
    token = "token",
    url = "url"
}
export declare const WebhookProperties: import("../functions/defineProperties").Properties<typeof WebhookProperty, Webhook<WebhookType>>;
//# sourceMappingURL=webhook.d.ts.map