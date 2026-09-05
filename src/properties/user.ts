/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { User } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum UserProperty {
    id = "id",
    tag = "tag",
    username = "username",
    displayName = "displayName",
    globalName = "globalName",
    discriminator = "discriminator",
    timestamp = "timestamp",
    bot = "bot",
    badges = "badges",
    banner = "banner",
    avatar = "avatar",
    avatarDecoration = "avatarDecoration",
    defaultAvatar = "defaultAvatar",
    accentColor = "accentColor",
    dmChannelID = "dmChannelID",
    primaryGuildTag = "primaryGuildTag",
    primaryGuildBadge = "primaryGuildBadge",
    primaryGuildEnabled = "primaryGuildEnabled",
    primaryGuildID = "primaryGuildID",
}

export const UserProperties = defineProperties<typeof UserProperty, User>({
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
})