"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperties = exports.UserProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var UserProperty;
(function (UserProperty) {
    UserProperty["id"] = "id";
    UserProperty["tag"] = "tag";
    UserProperty["username"] = "username";
    UserProperty["displayName"] = "displayName";
    UserProperty["globalName"] = "globalName";
    UserProperty["discriminator"] = "discriminator";
    UserProperty["timestamp"] = "timestamp";
    UserProperty["bot"] = "bot";
    UserProperty["badges"] = "badges";
    UserProperty["banner"] = "banner";
    UserProperty["avatar"] = "avatar";
    UserProperty["avatarDecoration"] = "avatarDecoration";
    UserProperty["defaultAvatar"] = "defaultAvatar";
    UserProperty["accentColor"] = "accentColor";
    UserProperty["dmChannelID"] = "dmChannelID";
    UserProperty["primaryGuildTag"] = "primaryGuildTag";
    UserProperty["primaryGuildBadge"] = "primaryGuildBadge";
    UserProperty["primaryGuildEnabled"] = "primaryGuildEnabled";
    UserProperty["primaryGuildID"] = "primaryGuildID";
})(UserProperty || (exports.UserProperty = UserProperty = {}));
exports.UserProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    tag: (i) => i?.tag,
    username: (i) => i?.username,
    displayName: (i) => i?.displayName,
    globalName: (i) => i?.globalName,
    discriminator: (i) => i?.discriminator,
    timestamp: (i) => i?.createdTimestamp,
    bot: (i) => i?.bot,
    badges: (i, sep) => i?.flags?.toArray().join(sep ?? ", "),
    banner: (i) => i?.bannerURL(),
    avatar: (i) => i?.displayAvatarURL(),
    avatarDecoration: (i) => i?.avatarDecorationURL(),
    defaultAvatar: (i) => i?.defaultAvatarURL,
    accentColor: (i) => i?.hexAccentColor,
    dmChannelID: (i) => i?.dmChannel?.id,
    primaryGuildTag: (i) => i?.primaryGuild?.tag,
    primaryGuildBadge: (i) => i?.guildTagBadgeURL(),
    primaryGuildEnabled: (i) => i?.primaryGuild?.identityEnabled,
    primaryGuildID: (i) => i?.primaryGuild?.identityGuildId,
});
//# sourceMappingURL=user.js.map