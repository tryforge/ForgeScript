import { GuildSoundboardSound, PartialSoundboardSound, SoundboardSound } from "discord.js";
export declare enum SoundboardSoundProperty {
    name = "name",
    soundID = "soundID",
    guildID = "guildID",
    userID = "userID",
    emoji = "emoji",
    volume = "volume",
    timestamp = "timestamp",
    available = "available",
    url = "url"
}
export declare const SoundboardSoundProperties: import("../functions/defineProperties").Properties<typeof SoundboardSoundProperty, SoundboardSound | GuildSoundboardSound | PartialSoundboardSound>;
//# sourceMappingURL=sound.d.ts.map