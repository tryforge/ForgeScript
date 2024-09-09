import { GuildEmoji } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum EmojiProperty {
    guildID = "guildID",
    name = "name",
    id = "id",
    authorID = "authorID",
    identifier = "identifier",
    requiresColons = "requiresColons",
    roles = "roles",
    managed = "managed",
    timestamp = "timestamp",
    animated = "animated",
    url = "url",
    format = "format",
}

export const EmojiProperties = defineProperties<typeof EmojiProperty, GuildEmoji>({
    guildID: (i) => i?.guild.id,
    id: (i) => i?.id,
    authorID: (i) => i?.author?.id,
    identifier: (i) => i?.identifier,
    name: (i) => i?.name,
    managed: (i) => i?.managed,
    animated: (i) => i?.animated,
    url: (i) => i?.url,
    format: (i) => i?.toString(),
    requiresColons: (i) => i?.requiresColons,
    timestamp: (i) => i?.createdTimestamp,
    roles: (i, sep) => i?.roles.cache.map((x) => x.id).join(sep || ", "),
})
