import { VoiceState } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum VoiceStateProperty {
    channelID = "channelID",
    guildID = "guildID",
    authorID = "authorID",
    deaf = "deaf",
    selfDeaf = "selfDeaf",
    guildDeaf = "guildDeaf",
    muted = "muted",
    selfMuted = "selfMuted",
    guildMuted = "guildMuted",
    timestamp = "timestamp"
}

export const VoiceStateProperties = defineProperties<typeof VoiceStateProperty, VoiceState>({
    timestamp: i => i?.channel?.createdTimestamp,
    authorID: i => i?.member?.id,
    channelID: i => i?.channelId,
    guildID: i => i?.guild.id,
    deaf: i => i?.deaf ?? false,
    guildDeaf: i => i?.serverDeaf ?? false,
    guildMuted: i => i?.serverMute ?? false,
    muted: i => i?.mute ?? false,
    selfDeaf: i => i?.selfDeaf ?? false,
    selfMuted: i => i?.selfMute ?? false
})