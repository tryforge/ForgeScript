import { OverwriteType, PermissionOverwrites } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum PermissionOverwritesProperty {
    id = "id",
    type = "type",
    allow = "allow",
    deny = "deny",
}

export const PermissionOverwritesProperties = defineProperties<typeof PermissionOverwritesProperty, PermissionOverwrites>({
    id: (i) => i?.id,
    type: (i) => OverwriteType[i?.type!],
    allow: (i, sep) => i?.allow.toArray().join(sep ?? ", "),
    deny: (i, sep) => i?.deny.toArray().join(sep ?? ", "),
})