import { GuildSoundboardSound, PartialSoundboardSound, SoundboardSound } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum SoundboardSoundProperty {
    name = "name",
    id = "id",
    guildID = "guildID",
    userID = "userID",
    emoji = "emoji",
    volume = "volume",
    timestamp = "timestamp",
    available = "available",
    url = "url"
}

export const SoundboardSoundProperties = defineProperties<typeof SoundboardSoundProperty, SoundboardSound | GuildSoundboardSound | PartialSoundboardSound>({
    name: (i) => i?.name,
    emoji: (i) => i?.emoji?.toString(),
    guildID: (i) => i?.guildId,
    userID: (i) => i?.user?.id,
    id: (i) => i?.soundId,
    volume: (i) => i?.volume,
    timestamp: (i) => i?.createdTimestamp,
    available: (i) => i?.available ?? false,
    url: (i) => i?.url,
})