import { Message, MessageType, Role } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum RoleProperty {
    timestamp = "timestamp",
    id = "id",
    name = "name",
    icon = "icon",
    color = "color",
    hoisted = "hoisted",
    managed = "managed",
    mentionable = "mentionable",
    rawPosition = "rawPosition",
    position = "position",
    permissions = "permissions",
    tags = "tags",
    members = "members",
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
})