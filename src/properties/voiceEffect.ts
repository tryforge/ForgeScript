import { VoiceChannelEffect, VoiceChannelEffectSendAnimationType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum VoiceEffectProperty {
    emoji = "emoji",
    channelID = "channelID",
    guildID = "guildID",
    userID = "userID",
    soundID = "soundID",
    soundVolume = "soundVolume",
    animationID = "animationID",
    animationType = "animationType",
}

export const VoiceEffectProperties = defineProperties<typeof VoiceEffectProperty, VoiceChannelEffect>({
    emoji: (i) => i?.emoji?.toString(),
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guild.id,
    userID: (i) => i?.userId,
    soundID: (i) => i?.soundId,
    soundVolume: (i) => i?.soundVolume,
    animationID: (i) => i?.animationId,
    animationType: (i) => VoiceChannelEffectSendAnimationType[i?.animationType!]
})