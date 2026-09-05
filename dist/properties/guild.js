"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildPreviewProperties = exports.GuildPreviewProperty = exports.GuildProperties = exports.GuildProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var GuildProperty;
(function (GuildProperty) {
    GuildProperty["id"] = "id";
    GuildProperty["ownerID"] = "ownerID";
    GuildProperty["name"] = "name";
    GuildProperty["nameAcronym"] = "nameAcronym";
    GuildProperty["description"] = "description";
    GuildProperty["timestamp"] = "timestamp";
    GuildProperty["features"] = "features";
    GuildProperty["icon"] = "icon";
    GuildProperty["banner"] = "banner";
    GuildProperty["splash"] = "splash";
    GuildProperty["discoverySplash"] = "discoverySplash";
    GuildProperty["afkTimeout"] = "afkTimeout";
    GuildProperty["afkChannelID"] = "afkChannelID";
    GuildProperty["systemChannelID"] = "systemChannelID";
    GuildProperty["systemChannelFlags"] = "systemChannelFlags";
    GuildProperty["publicUpdatesChannelID"] = "publicUpdatesChannelID";
    GuildProperty["safetyAlertsChannelID"] = "safetyAlertsChannelID";
    GuildProperty["rulesChannelID"] = "rulesChannelID";
    GuildProperty["widgetChannelID"] = "widgetChannelID";
    GuildProperty["widgetEnabled"] = "widgetEnabled";
    GuildProperty["bans"] = "bans";
    GuildProperty["roles"] = "roles";
    GuildProperty["emojis"] = "emojis";
    GuildProperty["stickers"] = "stickers";
    GuildProperty["channels"] = "channels";
    GuildProperty["soundboardSounds"] = "soundboardSounds";
    GuildProperty["autoModerationRules"] = "autoModerationRules";
    GuildProperty["memberCount"] = "memberCount";
    GuildProperty["boostCount"] = "boostCount";
    GuildProperty["boostLevel"] = "boostLevel";
    GuildProperty["mfaLevel"] = "mfaLevel";
    GuildProperty["nsfwLevel"] = "nsfwLevel";
    GuildProperty["verificationLevel"] = "verificationLevel";
    GuildProperty["preferredLocale"] = "preferredLocale";
    GuildProperty["large"] = "large";
    GuildProperty["verified"] = "verified";
    GuildProperty["partnered"] = "partnered";
    GuildProperty["maximumMembers"] = "maximumMembers";
    GuildProperty["maximumStageBitrate"] = "maximumStageBitrate";
    GuildProperty["approximateMemberCount"] = "approximateMemberCount";
    GuildProperty["approximatePresenceCount"] = "approximatePresenceCount";
})(GuildProperty || (exports.GuildProperty = GuildProperty = {}));
exports.GuildProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    ownerID: (i) => i?.ownerId,
    name: (i) => i?.name,
    nameAcronym: (i) => i?.nameAcronym,
    description: (i) => i?.description,
    timestamp: (i) => i?.createdTimestamp,
    features: (i, sep) => i?.features.join(sep ?? ", "),
    icon: (i) => i?.iconURL(),
    banner: (i) => i?.bannerURL(),
    splash: (i) => i?.splashURL(),
    discoverySplash: (i) => i?.discoverySplashURL(),
    afkTimeout: (i) => i?.afkTimeout,
    afkChannelID: (i) => i?.afkChannelId,
    systemChannelID: (i) => i?.systemChannelId,
    systemChannelFlags: (i, sep) => i?.systemChannelFlags.toArray().join(sep ?? ", "),
    publicUpdatesChannelID: (i) => i?.publicUpdatesChannelId,
    safetyAlertsChannelID: (i) => i?.safetyAlertsChannelId,
    rulesChannelID: (i) => i?.rulesChannelId,
    widgetChannelID: (i) => i?.widgetChannelId,
    widgetEnabled: (i) => i?.widgetEnabled,
    bans: (i, sep) => i?.bans.cache.map((x) => x.user.id).join(sep ?? ", "),
    roles: (i, sep) => i?.roles.cache.map((x) => x.id).join(sep ?? ", "),
    emojis: (i, sep) => i?.emojis.cache.map((x) => x.id).join(sep ?? ", "),
    stickers: (i, sep) => i?.stickers.cache.map((x) => x.id).join(sep ?? ", "),
    channels: (i, sep) => i?.channels.cache.map((x) => x.id).join(sep ?? ", "),
    soundboardSounds: (i, sep) => i?.soundboardSounds.cache.map((x) => x.soundId).join(sep ?? ", "),
    autoModerationRules: (i, sep) => i?.autoModerationRules.cache.map((x) => x.id).join(sep ?? ", "),
    memberCount: (i) => i?.memberCount,
    boostCount: (i) => i?.premiumSubscriptionCount,
    boostLevel: (i) => i?.premiumTier,
    mfaLevel: (i) => i?.nsfwLevel ? discord_js_1.GuildMFALevel[i.mfaLevel] : null,
    nsfwLevel: (i) => i?.nsfwLevel ? discord_js_1.GuildNSFWLevel[i.nsfwLevel] : null,
    verificationLevel: (i) => i?.verificationLevel ? discord_js_1.GuildVerificationLevel[i.verificationLevel] : null,
    preferredLocale: (i) => i?.preferredLocale,
    large: (i) => i?.large,
    verified: (i) => i?.verified,
    partnered: (i) => i?.partnered,
    maximumMembers: (i) => i?.maximumMembers,
    maximumStageBitrate: (i) => i?.maximumStageBitrate,
    approximateMemberCount: (i) => i?.approximateMemberCount,
    approximatePresenceCount: (i) => i?.approximatePresenceCount,
});
var GuildPreviewProperty;
(function (GuildPreviewProperty) {
    GuildPreviewProperty["id"] = "id";
    GuildPreviewProperty["name"] = "name";
    GuildPreviewProperty["description"] = "description";
    GuildPreviewProperty["features"] = "features";
    GuildPreviewProperty["timestamp"] = "timestamp";
    GuildPreviewProperty["icon"] = "icon";
    GuildPreviewProperty["splash"] = "splash";
    GuildPreviewProperty["emojis"] = "emojis";
    GuildPreviewProperty["stickers"] = "stickers";
    GuildPreviewProperty["discoverySplash"] = "discoverySplash";
    GuildPreviewProperty["approximateMemberCount"] = "approximateMemberCount";
    GuildPreviewProperty["approximatePresenceCount"] = "approximatePresenceCount";
})(GuildPreviewProperty || (exports.GuildPreviewProperty = GuildPreviewProperty = {}));
exports.GuildPreviewProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    name: (i) => i?.name,
    description: (i) => i?.description,
    features: (i, sep) => i?.features.join(sep || ", "),
    timestamp: (i) => i?.createdTimestamp,
    icon: (i) => i?.iconURL(),
    splash: (i) => i?.splashURL(),
    emojis: (i, sep) => i?.emojis.map((x) => x.id).join(sep || ", "),
    stickers: (i, sep) => i?.stickers.map((x) => x.id).join(sep || ", "),
    discoverySplash: (i) => i?.discoverySplashURL(),
    approximateMemberCount: (i) => i?.approximateMemberCount,
    approximatePresenceCount: (i) => i?.approximatePresenceCount,
});
//# sourceMappingURL=guild.js.map