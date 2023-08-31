import { GuildMember, Message, MessageType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum MemberProperty {
    nickname = "nickname",
    displayName = "displayName",
    displayColor = "displayColor",
    roles = "roles",
    avatar = "avatar",
    bannable = "bannable",
    kickable = "kickable",
    guildID = "guildID",
    id = "id",
    manageable = "manageable",
    timeout = "timeout",
    timedOutUntil = "timedOutUntil",
    status = "status",
    platform = "platform",
    timestamp = "timestamp",
    boosting = "boosting",
    boostingSince = "boostingSince"
}

export const MemberProperties = defineProperties<typeof MemberProperty, GuildMember>({
    timestamp: i => i?.joinedTimestamp,
    displayColor: i => i?.displayHexColor,
    displayName: i => i?.displayName,
    avatar: i => i?.displayAvatarURL(),
    nickname: i => i?.nickname,
    roles: (i, sep) => i?.roles.cache.map(x => x.id).join(sep || ", "),
    bannable: i => i?.bannable ?? false,
    kickable: i => i?.kickable ?? false,
    manageable: i => i?.manageable ?? false,
    id: i => i?.id,
    guildID: i => i?.guild.id,
    timedOutUntil: i => i?.isCommunicationDisabled() ? i.communicationDisabledUntil.getTime() : 0,
    timeout: i => i?.isCommunicationDisabled() ?? false,
    status: i => i?.presence?.status,
    platform: (i, sep) => Object.keys(i?.presence?.clientStatus ?? {}).join(sep || ", "),
    boosting: i => i?.premiumSinceTimestamp !== null,
    boostingSince: i => i?.premiumSinceTimestamp ?? 0
})