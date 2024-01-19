import { Invite } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum InviteProperty {
    authorID = "authorID",
    channelID = "channelID",
    guildID = "guildID",
    uses = "uses",
    maxUses = "maxUses",
    maxAge = "maxAge",
    timestamp = "timestamp",
    code = "code",
    url = "url",
    expiresTimestamp = "expiresTimestamp",
}

export const InviteProperties = defineProperties<typeof InviteProperty, Invite>({
    authorID: (i) => i?.inviterId,
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guild?.id,
    maxUses: (i) => i?.maxUses,
    uses: (i) => i?.uses,
    maxAge: (i) => i?.maxAge,
    timestamp: (i) => i?.createdTimestamp,
    code: (i) => i?.code,
    url: (i) => i?.url,
    expiresTimestamp: (i) => i?.expiresTimestamp,
})
