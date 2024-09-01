import { Guild } from "discord.js";
export declare enum GuildProperty {
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
export declare const GuildProperties: import("../functions/defineProperties").Properties<typeof GuildProperty, Guild>;
//# sourceMappingURL=guild.d.ts.map