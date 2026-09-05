/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Role } from "discord.js"
import defineProperties from "../functions/defineProperties"
import { int2hex } from "../functions/hex"

export enum RoleProperty {
    id = "id",
    name = "name",
    icon = "icon",
    color = "color",
    hoisted = "hoisted",
    managed = "managed",
    mentionable = "mentionable",
    rawPosition = "rawPosition",
    position = "position",
    timestamp = "timestamp",
    permissions = "permissions",
    tags = "tags",
    members = "members",
    unicodeEmoji = "unicodeEmoji",
    secondaryColor = "secondaryColor",
    tertiaryColor = "tertiaryColor",
}

export const RoleProperties = defineProperties<typeof RoleProperty, Role>({
    timestamp: (i) => i?.createdTimestamp,
    id: (i) => i?.id,
    name: (i) => i?.name,
    icon: (i) => i?.icon,
    color: (i) => i?.hexColor,
    hoisted: (i) => i?.hoist,
    managed: (i) => i?.managed,
    members: (i, sep) => i?.members.map((x) => x.id).join(sep || ", "),
    mentionable: (i) => i?.mentionable,
    position: (i) => i?.position,
    rawPosition: (i) => i?.rawPosition,
    permissions: (i, sep) => i?.permissions.toArray().join(sep || ", "),
    tags: (i, sep) => Object.keys(i?.tags ?? {}).join(sep || ", "),
    unicodeEmoji: (i) => i?.unicodeEmoji,
    secondaryColor: (i) => i?.colors.secondaryColor ? "#" + int2hex(i?.colors.secondaryColor) : null,
    tertiaryColor: (i) => i?.colors.tertiaryColor ? "#" + int2hex(i?.colors.tertiaryColor) : null,
})