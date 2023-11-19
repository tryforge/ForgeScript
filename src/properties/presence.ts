import { Message, MessageType, Presence, Role } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum PresenceProperty {
    id = "id",
    guildID = "guildID",
    status = "status",
    platform = "platform"
}

export const PresenceProperties = defineProperties<typeof PresenceProperty, Presence>({
    id: i => i?.userId,
    status: i => i?.status,
    guildID: i => i?.guild?.id,
    platform: (i, sep) => Object.keys(i?.clientStatus ?? {}).join(sep ?? ", ")
})
