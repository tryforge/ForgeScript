import { Channel, ChannelType, Collection, GuildMember, User } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum UserProperty {
    id = "id",
    username = "username",
    displayName = "displayName",
    globalName = "globalName",
    badges = "badges",
    avatar = "avatar",
    accentColor = "accentColor",
    banner = "banner",
    timestamp = "timestamp",
    dmChannelID = "dmChannelID",
}

export const UserProperties = defineProperties<typeof UserProperty, User>({
    id: (i) => i?.id,
    avatar: (i) => i?.displayAvatarURL(),
    badges: (i, sep) => i?.flags?.toArray().join(sep || ", "),
    displayName: (i) => i?.displayName,
    globalName: (i) => i?.globalName,
    username: (i) => i?.username,
    banner: (i) => i?.bannerURL(),
    accentColor: (i) => i?.hexAccentColor,
    timestamp: (i) => i?.createdTimestamp,
    dmChannelID: (i) => i?.dmChannel?.id,
})
