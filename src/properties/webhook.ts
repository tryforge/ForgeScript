import { Webhook, WebhookType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum WebhookProperty {
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
    url = "url",
}

export const WebhookProperties = defineProperties<typeof WebhookProperty, Webhook>({
    id: (i) => i?.id,
    name: (i) => i?.name,
    type: (i) => WebhookType[i?.type!],
    avatar: (i) => i?.avatarURL(),
    ownerID: (i) => i?.owner?.id,
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guildId,
    sourceChannelID: (i) => i?.sourceChannel?.id,
    sourceGuildID: (i) => i?.sourceGuild?.id,
    timestamp: (i) => i?.createdTimestamp,
    token: (i) => i?.token,
    url: (i) => i?.url,
})