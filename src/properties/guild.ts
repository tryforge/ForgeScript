import { Guild } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum GuildProperty {
    id = "id",
    ownerID = "ownerID",
    name = "name",
    description = "description",
    features = "features",
    afkChannelID = "afkChannelID",
    maximumMembers = "maximumMembers",
    systemChannelID = "systemChannelID",
    afkTimeout = "afkTimeout",
    memberCount = "memberCount",
    boostCount = "boostCount",
    timestamp = "timestamp",
    icon = "icon",
    splash = "splash",
    banner = "banner",
    roles = "roles",
    emojis = "emojis",
    stickers = "stickers",
    boostLevel = "boostLevel",
    approximateMemberCount = "approximateMemberCount",
    approximatePresenceCount = "approximatePresenceCount"
}

export const GuildProperties = defineProperties<typeof GuildProperty, Guild>({
    description: i => i?.description,
    features: (i, sep) => i?.features.join(sep || ", "),
    id: i => i?.id,
    name: i => i?.name,
    banner: i => i?.bannerURL(),
    icon: i => i?.iconURL(),
    splash: i => i?.splashURL(),
    emojis: (i, sep) => i?.emojis.cache.map(x => x.id).join(sep || ", "),
    roles: (i, sep) => i?.roles.cache.map(x => x.id).join(sep || ", "),
    stickers: (i, sep) => i?.stickers.cache.map(x => x.id).join(sep || ", "),
    ownerID: i => i?.ownerId,
    afkChannelID: i => i?.afkChannelId,
    systemChannelID: i => i?.systemChannelId,
    timestamp: i => i?.createdTimestamp,
    boostCount: i => i?.premiumSubscriptionCount,
    boostLevel: i => i?.premiumTier,
    afkTimeout: i => i?.afkTimeout,
    approximateMemberCount: i => i?.approximateMemberCount,
    memberCount: i => i?.memberCount,
    maximumMembers: i => i?.maximumMembers,
    approximatePresenceCount: i => i?.approximatePresenceCount
})